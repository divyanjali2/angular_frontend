import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet], 
//   template: `Hello {{ city }}, {{ 1 + 1 }}`,
//   styles: [
//     `
//     :host {
//       color: rgb(5, 94, 45);
//     }
//     `
//   ],
// })
// export class AppComponent {
//   city = 'San Francisco';
// }


//Composing components (component inside another component)
// @Component ({
//   selector: 'app-user', //unique id
//   template:`Username: {{ username }}`,
// })

// export class UserComponent {
//   username = 'Navodya Divyanjali';
// }

// @Component({
//   selector: 'app-root',
//   template: `
//     <section>
//       <app-user />
//     </section>
//   `,
//   styles: [
//     `
//     :host {
//       color: rgb(5, 94, 45);
//     }
//     `
//   ],
//   imports: [UserComponent],
// })

// export class AppComponent {}


//Control flow in componens - @if
@Component({
  selector: 'app-root',
  template: `
    <div>
      @if (isServerRunning) {
        <span class="running">😍 Yes, server is running</span>
      } @else {
        <span class="not-running">😕 No, server is not running</span>
      }
    </div>
  `,
  //applying colors based on true false
  styles: [
    `
    .running {
      color: green;
      font-weight: bold;
    }
    .not-running {
      color: red;
      font-weight: bold;
    }
    `
  ],
})
export class AppComponent {
  isServerRunning = false; 
}
