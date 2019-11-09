import { Component, ChangeDetectionStrategy, ViewEncapsulation, Directive, Input } from '@angular/core';


@Directive({
  selector: `[ce-card-content], ce-card-content`,
  host:{
    'class':'ce-card-content'
  }
})
export class CeCardContentDirective{}

@Directive({
  selector:'ce-card-actions',
  host :{
    'class':'ce-card-actions',
    '[class.ce-card-actions-align-end]':'align==="end"',
  }
})
export class CeCardActionsDirective{
  @Input() align:'start'|'end'='start';
}


@Directive({
  selector:'[ce-card-img]',
  host:{
    'class': 'ce-card-img'
  }
})
export class CeCardImageDirective{}


@Directive({
  selector: '[ce-card-sm-img]',
  host:{
    'class': 'ce-card-sm-img'
  }
})
export class CeCardSmImageDirective{}

@Directive({
  selector:'[ce-card-md-img]',
  host:{
    'class':'ce-card-md-img'
  }
})
export class CeCardMdImageDirective{}

@Directive({
  selector:'[ce-card-lg-img]',
  host:{
    'class':'ce-card-lg-img'
  }
})
export class CeCardlgImageDirective{}



@Directive({
  selector:'[ce-card-xl-img]',
  host:{
    'class':'ce-card-xl-img'
  }
})
export class CeCardxlImageDirective{}

@Directive({
  selector:'[ce-card-avatar]',
  host:{
    'class':'ce-card-avatar'
  }
})
export class CeCardAvatarDirective{}

@Component({
  selector            : 'ce-card',
  templateUrl         : './ce-card.component.html',
  preserveWhitespaces : false,
  changeDetection     : ChangeDetectionStrategy.OnPush,
  exportAs            : 'cecard',
  encapsulation       : ViewEncapsulation.None,
  host                : {
    'class'           : 'ce-card'
  }
})
export class CeCardComponent  {}

@Component({
  selector:'ce-card-title-group',
  templateUrl:'./ce-card-title-group.html',
  preserveWhitespaces: false,
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host:{
    'class': 'ce-card-title-group'
  }
}) 
export class CeCardTitleGroupcomponent{}
