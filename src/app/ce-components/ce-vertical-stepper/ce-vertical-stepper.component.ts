import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { PrefixSource } from 'webpack-sources';

@Component({
  selector: 'ce-vertical-stepper',
  templateUrl: './ce-vertical-stepper.component.html',
  preserveWhitespaces:false,
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CeVerticalStepperComponent implements OnInit {
  @Input() stepperlist: any;
  
  constructor() { }

  ngOnInit() {
 
  }

}
