import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.sass']
})
export class ChildOneComponent extends BaseComponent implements OnInit {

  constructor(public router: Router) {
    super(router);
  }

  ngOnInit() {
  }
}
