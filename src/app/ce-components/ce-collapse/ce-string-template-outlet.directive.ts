import { Directive, TemplateRef, EmbeddedViewRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[CeStringTemplateOutlet]'
})
export class CeStringTemplateOutletDirective {

  private isTemplate: boolean;
  private inputTemplate: TemplateRef<void> | null =null;
  private inputViewRef: EmbeddedViewRef<void> | null = null;
  private defaultViewRef : EmbeddedViewRef<void> | null = null;

  constructor(private viewContainer : ViewContainerRef, private defaultTemplate : TemplateRef<void>) { }

  @Input()
  set ceStringTemplateOutlet(value: string | TemplateRef<void>){
    if(value instanceof TemplateRef){
      this.isTemplate = true;
      this.inputTemplate = value;
    }else{
      this.isTemplate = false;
    }

  }
  updateView(): void{
    if(!this.isTemplate){
      if(!this.defaultViewRef){
        this.viewContainer.clear();
        this.inputViewRef = null;
        if(this.defaultTemplate){
          this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate);
        }
      }
    }else{
      if(!this.inputViewRef){
        this.viewContainer.clear();
        this.defaultViewRef =null;
        if(this.inputTemplate){
          this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate);
        }
      }
    }
  }
}