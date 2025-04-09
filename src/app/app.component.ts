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
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled = true;
  
  
}
