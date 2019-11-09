import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ce-list',
  templateUrl: './ce-list.component.html',
  encapsulation:ViewEncapsulation.None,
  preserveWhitespaces:false,
  changeDetection:ChangeDetectionStrategy.OnPush,
  host:{
    'class':'ce-list'
  }
})
export class CeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
