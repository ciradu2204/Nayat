import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ce-card-footer',
  templateUrl: './ce-card-footer.component.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
  preserveWhitespaces:false,
  host:{
    'class':'ce-card-footer'
  }
})
export class CeCardFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
