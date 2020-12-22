import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorService } from './calculator.service';
import { SipCalculator } from './SipCalculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  sipCalculatorForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  amountToBeReceived: number = 0;
  isResultVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: CalculatorService
  ) {}

  ngOnInit(): void {
    this.sipCalculatorForm = this.formBuilder.group({
      amount: ['', Validators.required],
      durationOfInvestment: ['', Validators.required],
      rateOfInterest: ['', Validators.required],
    });
  }

  calculateSIP() {
    let sipCalculator = this.sipCalculatorForm.value as SipCalculator;
    console.log(sipCalculator.amount);
    console.log(sipCalculator.durationOfInvestment);
    console.log(sipCalculator.rateOfInterest);
    var n = sipCalculator.durationOfInvestment * 12;
    var i: any = sipCalculator.rateOfInterest / 1200;
    console.log(n);
    console.log(i);

    // this.amountReceived = this.amount * ({[1+i]n-1}/i) * (1+i)
    this.amountToBeReceived =
      sipCalculator.amount * Math.pow(1 + i, n - 1) * ((1 + i) / i);

    this.isResultVisible = true;
  }
}
