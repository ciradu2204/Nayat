import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ce-footer',
  templateUrl: './ce-footer.component.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
  preserveWhitespaces:false,
  host:{
  "class":"footer"
  }
})
export class CeFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
