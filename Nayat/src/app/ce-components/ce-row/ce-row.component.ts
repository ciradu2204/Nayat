import { CommonService } from './../common-services.service';
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, ElementRef, Renderer2 } from '@angular/core';

export type ceAlignItems= 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch';
export type ceJustify= 'start' | 'center' | 'end' |'space-between' | 'space-around';

@Component({
  selector: 'ce-row',
  templateUrl: './ce-row.component.html',
  preserveWhitespaces:false,
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None,
  providers:[ CommonService ],
  host:{
    'class':'ce-row'
  }
})
export class CeRowComponent implements OnInit {
  @Input() ceAlignItems?:ceAlignItems;
  @Input() ceJustify?:ceJustify;
  private element:HTMLElement= this.elementRef.nativeElement;

  isNotNil(value:any):boolean{
    return (typeof(value)!=='undefined' && value !==null);
  }

  constructor(public elementRef:ElementRef, public render:Renderer2, public updateClass:CommonService) { }

  setClass():void{
    const classMap={}
    if(this.isNotNil(this.ceAlignItems ) || this.isNotNil(this.ceJustify)){
      classMap  ['align-items-top']=this.ceAlignItems==='top';
      classMap  ['align-items-middle']=this.ceAlignItems==='middle';
      classMap  ['align-items-bottom']=this.ceAlignItems==='bottom';
      classMap ['align-items-baseline']=this.ceAlignItems==='baseline';
      classMap  ['align-items-stretch']=this.ceAlignItems==='stretch';
      classMap  ['justify-content-start']=this.ceJustify==='start';
      classMap  ['justify-content-center']=this.ceJustify==='center';
      classMap  ['justify-content-end']=this.ceJustify==='end';
      classMap ['justify-content-around']=this.ceJustify==='space-around';
      classMap  ['justify-content-between']=this.ceJustify==='space-between';
    }
    this.updateClass.updateClass(this.element,classMap);
    }
  ngOnInit() {
    this.setClass();
  }

}
