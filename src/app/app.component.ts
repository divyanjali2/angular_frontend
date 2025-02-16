import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], 
  template: `Hello {{ city }}, {{ 1 + 1 }}`,
  styles: [
    `
    :host {
      color: rgb(5, 94, 45);
    }
    `
  ],
  // styleUrls: ['./app.component.css'] // Corrected from styleUrl to styleUrls
})
export class AppComponent {
  city = 'San Francisco';
}
