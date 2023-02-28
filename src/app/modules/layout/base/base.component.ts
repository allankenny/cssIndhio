import { AfterContentInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'base-root',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
