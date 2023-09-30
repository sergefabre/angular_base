import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  users: User[] = [
    {
      id: 1,
      name: 'Serge',
    },
    {
      id: 2,
      name: 'Aline',
    },
    {
      id: 3,
      name: 'Arthur',
    },
  ];

  // selectUser(user: User) {
  //   console.log(user);
  //   this.router.navigate([user.id], {
  //     relativeTo: this.activatedRoute,
  //     queryParams: { name: user.name },
  //     queryParamsHandling: 'merge', // pour conserver les queryParams des routes parentes
  //   });
  // }
}
