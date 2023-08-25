import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CALCULADORA ATOS CORP.';
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  sumar(): void {
    this.result = this.num1 + this.num2;
  }

  restar(): void {
    this.result = this.num1 - this.num2;
  }

  multiplicar(): void {
    this.result = this.num1 * this.num2;
  }

  dividir(): void {
    this.result = this.num1 / this.num2;
  }
}
