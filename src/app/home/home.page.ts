import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  display = "0";
  memory: any = [];
  operator = '';
  operand = 0;
  equalClick = 0;

  constructor() {}

  numbers(number: any) {
    this.memory.push(number);
    this.display = this.memory.join('');
    this.equalClick = 0;
  }

  delete() {
    console.log(this.display.length);
    if (this.display.length == 1) {
      this.display = "0";
      this.memory = [];
    } else {
      this.memory.pop();
      this.display = this.memory.join('');
    }
  }

  operation(op:any){
    this.operand = Number(this.display);
    this.memory = [];
    this.operator = op;

    switch (this.operator) {
      case '%': this.display = String(Number(this.display) / 100);
        break;
      case 'sen': this.display = String(Math.sin(Number(this.display)).toFixed(4));
        break;
      case 'cos': this.display = String(Math.cos(Number(this.display)).toFixed(4));
        break;
      case 'tan': this.display = String(Math.tan(Number(this.display)).toFixed(4));
        break;
      case 'sqrt': this.display = String(Math.sqrt(Number(this.display)).toFixed(4));
        break;
    }
  }

  equal(){
    switch (this.operator) {
      case '+': this.display = String((this.operand + Number(this.display)));
        break;
      case '-': this.display = String((this.operand - Number(this.display)));
        break;
      case 'x': this.display = String((this.operand * Number(this.display)));
        break;
      case '/': this.display = String((this.operand / Number(this.display)));
        break;
      case 'pow': this.display = String((Math.pow(this.operand,Number(this.display))));
        break;
      default: this.display = "Syntax Error";
        break;
    }
    this.memory = [];
    this.equalClick = 1;
  }

  reset(){
    this.display = "0";
    this.memory = [];
    this.operator = '';
    this.operand = 0;
    this.equalClick = 0;
  }
}
