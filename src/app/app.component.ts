import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code step by step with;';
  name = 'Monicah Chege';
  sayHello() {
    alert('Hello, from Angular');
  }
  username:string = 'Monicah Chege';
  age: number | string = 25;
  email='abc@gmail.com';
  contact=1234567890;
  displayVal = '';

  apple() {
    this.age='abc'
  }
  getData(val:string){
    console.warn(val);
  }
  getValue(val:string){
    console.warn(val);
    this.displayVal=val;
  }
}
