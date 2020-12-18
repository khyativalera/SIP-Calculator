import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  sipCalculatorForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  amount:number= 0;
  durationOfInvestment: number = 0;
  rateOfInterest: number = 0;
  amountReceived: any;


  constructor(private formBuilder: FormBuilder, private service: CalculatorService) { }

  ngOnInit(): void {
    this.sipCalculatorForm= this.formBuilder.group({
      amount: ['', Validators.required],
      durationOfInvestment: ['', Validators.required],
      rateOfInterest: ['', Validators.required]
    })
  }

  calculateSIP() {
    console.log(this.amount);
    console.log(this.durationOfInvestment);
    console.log(this.rateOfInterest);
    var n = this.durationOfInvestment*12;
    var i:any = (this.rateOfInterest/1200);
    console.log(n);
    console.log(i);

    // this.amountReceived = this.amount * ({[1+i]n-1}/i) * (1+i)
    this.amountReceived = (this.amount) * Math.pow(1+i, n-1) * ((1+i)/i)
   
    
  }


    
}
