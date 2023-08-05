import { Component } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: User[] = [
    {
      id: 1,
      name: 'user_1',
    },
    {
      id: 2,
      name: 'user_2',
    },
    {
      id: 3,
      name: 'user_3',
    },
  ];

  selectUser(user: User) {
    console.log(user);
  }
}
