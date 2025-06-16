import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [UserListComponent],
  template: `
    <app-user-list></app-user-list>
  `,
})
export class AppComponent {} 