import { Component } from '@angular/core';
import { Example } from './authServices/Auth';
@Component({
  selector: 'app-root',
  templateUrl:'

',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  e: string;
  constructor(private klnh: Example) {
    this.e = this.klnh.getValue();
  }
}
