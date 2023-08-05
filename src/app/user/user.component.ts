import { Component, Input, OnInit } from '@angular/core';
import { User } from '../users/users.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private routeActive: ActivatedRoute) {
    console.log(routeActive);
  }
  @Input() user: User = { id: 0, name: '???' };

  ngOnInit(): void {
    this.routeActive.paramMap.subscribe((x) => console.log(x));
  }
}
