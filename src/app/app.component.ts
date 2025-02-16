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
// @Component({
//   selector: 'app-root',
//   template: `
//     <div>
//       @if (isServerRunning) {
//         <span class="running">😍 Yes, server is running</span>
//       } @else {
//         <span class="not-running">😕 No, server is not running</span>
//       }
//     </div>
//   `,
//   //applying colors based on true false
//   styles: [
//     `
//     .running {
//       color: green;
//       font-weight: bold;
//     }
//     .not-running {
//       color: red;
//       font-weight: bold;
//     }
//     `
//   ],
// })
// export class AppComponent {
//   isServerRunning = false; 
// }

//Control flow in componens - @for
@Component({
  selector: 'app-root',
  template: `
    @for(user of users; track user.id) {
      <p>{{ user.name }} is {{ user.age }}</p>
    }
  `,
})

export class AppComponent {
  users = [
    {id: 0, name: 'Sarah', age: 23},
    {id: 1, name: 'John', age: 18},
    {id: 2, name: 'Willy', age: 20},
    {id: 3, name: 'Smith', age: 12},
    {id: 4, name: 'Jane', age: 15},
  ]
}
