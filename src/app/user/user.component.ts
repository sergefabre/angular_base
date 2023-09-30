import { Component, OnInit } from '@angular/core';
import { User } from '../users/users.component';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User = { id: 0, name: '???' };
  details: string | null = null;
  constructor(private routeActive: ActivatedRoute) {
    console.log(routeActive);
  }

  ngOnInit(): void {
    this.routeActive.paramMap.subscribe((paramMap: ParamMap) => {
      this.user.id = +paramMap.get('id')!;
      // this.user.name = paramMap.get('name')!;
    });
    this.routeActive.queryParamMap.subscribe((qpM: ParamMap) => {
      this.user.name = qpM.get('name')!;
      this.details = qpM.get('details');
    });
  }
}
