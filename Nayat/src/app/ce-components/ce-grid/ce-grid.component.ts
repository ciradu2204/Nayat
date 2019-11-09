import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ce-grid',
  templateUrl: './ce-grid.component.html',
  preserveWhitespaces:false,
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
  host:{
    'class':'ce-grid'
  }
})
export class CeGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
