import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ce-header',
  templateUrl: './ce-header.component.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
  preserveWhitespaces:false,
  host:{
    'class':'header'
  }
})
export class CeHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
