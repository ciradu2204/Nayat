import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Directive } from '@angular/core';


@Directive({
  selector  : `ce-card-title,[ce-card-title]`,
  host      :{
    'class' : 'ce-card-title'
  }
})
export class CeCardTitleDirective{}

@Directive({
  selector:`ce-card-subtitle,[ce-card-subtitle]`,
  host:{
    'class':'ce-card-subtitle'
  }
})
export class CeCardSubtitleDirective{}


@Component({
  selector            : 'ce-card-header',
  templateUrl         : './ce-card-header.component.html',
  encapsulation       : ViewEncapsulation.None,
  changeDetection     : ChangeDetectionStrategy.OnPush,
  preserveWhitespaces :  false,
  host                :{
    'class'           : 'ce-card-header'
  }

})

export class CeCardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
