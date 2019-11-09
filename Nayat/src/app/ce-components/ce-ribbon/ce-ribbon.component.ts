import { CommonService } from '../common-services.service';
import { Component, OnInit, Input,Directive,ElementRef, Renderer2, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

export type color='primary'|'secondary'|'tertiary'|'success'|'warning'|'danger'|'dark'|'medium'|'light';
export type type='ribbon'|'burst';

@Directive({
  selector: '[ce-ribbontext]',
  host:{
    'class':'ribbontext' 
  }
})
export class RibbonDirective {}

@Directive({
  selector: '[ce-bursttext]',
  host:{
    'class':'bursttext' 
  }
})
export class BurstDirective {}
@Component({
  selector: 'ce-ribbon',
  templateUrl: './ce-ribbon.component.html',
  styleUrls: ['./ce-ribbon.component.scss'],
  providers:[ CommonService ],
  preserveWhitespaces:false,
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class CeRibbonComponent implements OnInit {
@Input() class:string;
@Input() color:color;
@Input() type:type;
private element:HTMLElement=this.elementRef.nativeElement;
isNotNull(value:any):boolean{
  return (typeof(value)!=='undefined' && value !==null)
}
  constructor(public elementRef:ElementRef,public render:Renderer2,public updateClassService:CommonService) { }
  
  setClass():void{
    const classMap = {}
    if(this.isNotNull(this.color)||this.isNotNull(this.type)){
    classMap ['cei-ribbon']=this.type==='ribbon'; 
    classMap ['cei-starburst']=this.type==='burst'; 
    classMap ['ribbon-primary']=this.color==='primary'; 
    classMap ['ribbon-secondary']=this.color==='secondary';
    classMap ['ribbon-tertiary']=this.color==='tertiary';
    classMap ['ribbon-success']=this.color==='success';
    classMap ['ribbon-warning']=this.color==='warning';
    classMap ['ribbon-danger']=this.color==='danger';
    classMap ['ribbon-dark']=this.color==='dark';
    classMap ['ribbon-medium']=this.color==='medium';
    classMap ['ribbon-light']=this.color==='light';
    }
    this.updateClassService.updateClass(this.element,classMap);
  }
  ngOnInit() {
    this.setClass();
  }
  
}