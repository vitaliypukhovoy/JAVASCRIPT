import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 public inputValue :string  = " Hello";

  xValue:number = 0;
  yValue:number = 0;
  result:number;
  CurrentValue:string = "";
  items: string[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.items[i] = "Item " + (i + 1);
    }
  }

  calculate(){
  this.result = this.xValue * this.yValue;
  }

 reset(){
   this.xValue = this.yValue = 0;
   this.result = undefined;

  }

  ngOnInit() {
  }

}
