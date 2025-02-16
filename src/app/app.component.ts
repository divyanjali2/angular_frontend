import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  template : 'Welcome to Angular!!',
  styles: [
    `
    :host {
      color:rgb(5, 94, 45);
    }
    `
  ],
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
}
