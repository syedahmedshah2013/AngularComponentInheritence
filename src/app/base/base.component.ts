import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.sass']
})
export class BaseComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  loadChild(routeName: string) {
    this.router.navigateByUrl(`/${routeName}`);
  }

}
