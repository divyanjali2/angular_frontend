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
@Component ({
  selector: 'app-user', //unique id
  template:`Username: {{ username }}`,
})

export class UserComponent {
  username = 'YoungTech';
}

@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-user />
    </section>
  `,
  styles: [
    `
    :host {
      color: rgb(5, 94, 45);
    }
    `
  ],
  imports: [UserComponent],
})

export class AppComponent {}
