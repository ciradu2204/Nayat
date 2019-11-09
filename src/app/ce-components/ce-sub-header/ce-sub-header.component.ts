import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ce-sub-header',
  templateUrl: './ce-sub-header.component.html',
  styleUrls: ['./ce-sub-header.component.scss'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
  preserveWhitespaces:false,
  host:{
    'class':'subheader'
  }
})
export class CeSubHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
