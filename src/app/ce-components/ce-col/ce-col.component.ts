import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, ElementRef, Renderer2 } from '@angular/core';
import { CommonService } from '../common-services.service';

export type ceAlign= 'start' | 'center' | 'end' | 'baseline' | 'stretch';

@Component({
  selector: 'ce-col',
  providers:[CommonService],
  templateUrl: './ce-col.component.html',
  preserveWhitespaces:false,
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class CeColComponent implements OnInit {
  @Input() colSize?:number;
  @Input() colSizeSm?:number;
  @Input() colSizeMd?:number;
  @Input() colSizelg?:number;
  @Input() colSizeXl?:number;
  @Input() align?:ceAlign;
  private element=this.elementRef.nativeElement;
  isNotNil(value:any):boolean{
    return (typeof(value)!=='undefined') && value!==null; 
  }
  constructor(public elementRef:ElementRef, public render:Renderer2, public updateClassService:CommonService) { }
  setClass():void{
    const classMap={
      [`ce-col-${this.colSize}`]:this.isNotNil(this.colSize),
      [`ce-col-sm-${this.colSizeSm}`]:this.isNotNil(this.colSizeSm),
      [`ce-col-md-${this.colSizeMd}`]:this.isNotNil(this.colSizeMd),
      [`ce-col-lg-${this.colSizelg}`]:this.isNotNil(this.colSizelg),
      [`ce-col-xl-${this.colSizeXl}`]:this.isNotNil(this.colSizeXl),
      [`align-self-${this.align}`]:this.isNotNil(this.align)
    };
    this.updateClassService.updateClass(this.element,classMap);
  }

  ngOnInit() {
    this.setClass();
  }

}
