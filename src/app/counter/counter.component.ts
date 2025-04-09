import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counterValue: number = 0;

  increment() {
    this.counterValue++;
  }
  decrement(){
    this.counterValue--;
  }
}
