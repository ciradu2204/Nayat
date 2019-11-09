import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ce-content',
  templateUrl: './ce-content.component.html',
encapsulation:ViewEncapsulation.None,
changeDetection:ChangeDetectionStrategy.OnPush,
preserveWhitespaces:false,
host:{
  "class":"ce-content"
}

})
export class CeContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
