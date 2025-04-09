import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [ LoginComponent],
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

  apple() {
    this.age='abc'
  }
  getData(val:string){
    console.warn(val);
  }
}
