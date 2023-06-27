import { Component } from '@angular/core';
import { Example } from 'src/app/authServices/Auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exampleValue: string;
  constructor(private A: Example) {
    this.exampleValue = this.A.getValue();
  }
}
