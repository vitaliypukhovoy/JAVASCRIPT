import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form',
  //templateUrl: './form.component.html',
  //styleUrls: ['./form.component.css']
  template: `    
    <form #form [formGroup]="_form" (ngSubmit)="onSubmit(form)" 
novalidate>
    
        <input  formControlName="number">
    
      
      
        <input  formControlName="task">
      
      <br/>
      <input type="submit" value="Submit" [disabled]="!_form.valid" >
      <input type="reset" value="Reset" >
    </form>
      
    <!--<div class="alert alert-danger"-->
         <!--*ngIf="_form.controls['number'].invalid && _form.controls['number'].touched">-->
      <!--It's not number-->
    <!--</div>-->
    <!--<div class="alert alert-danger"-->
         <!--*ngIf="_form.controls['task'].invalid && _form.controls['task'].touched">-->
      <!--It's not character-->
    <!--</div>-->


    <!--<div>-->

      <!--<h3>{{_form.value.number}}   {{_form.value.task}}</h3>-->

    <!--</div>-->

  `,
  styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}     
        
    `],

  //encapsulation: ViewEncapsulation.Native
})
export class FormComponent implements OnInit {

  _form : FormGroup;
  constructor() { }

  ngOnInit() {

    this._form = new FormGroup({
      number : new FormControl('',
        [Validators.required,
          Validators.pattern('^[0-9]+$')
       ]),
      task : new FormControl('',
        [Validators.required,
          Validators.pattern('\\D*')
        ]),
    });
  }

  onSubmit(form: FormGroup){
    alert('sumit');
  }




}
