import { Injectable,Renderer2 } from '@angular/core';

@Injectable()
export class CommonService {
  private classMap={};
  updateClass(el:HTMLElement,classMap:object ):void{
    this.removeClass(el,this.classMap,this.render);
    this.classMap={...classMap};
    this.addClass(el,this.classMap,this.render);
  }
  private removeClass(el:HTMLElement,classMap:object,render:Renderer2):void{
    for(const i in classMap){
      if(classMap.hasOwnProperty(i)){
        render.removeClass(el,i);
      }
    }
  }
  private addClass(el:HTMLElement,classMap:object,render:Renderer2){
    for(const i in classMap){
      if(classMap.hasOwnProperty(i)){
        if(classMap[i]){
          render.addClass(el,i);
        }
      }
    }
  }
  constructor(private render:Renderer2) { }
}
