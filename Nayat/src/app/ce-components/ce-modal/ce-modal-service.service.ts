import { Injectable, Component, ComponentRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CeModalControlService } from './ce-modal-control.service';
import { CeModalRef } from './ce-modal.ref';
import { CeModalOptions } from './ce-modal-options';
import { CeModalComponent } from './ce-modal.component';
import { ComponentPortal } from '@angular/cdk/portal';

export class ModalBuilder {
  private modalRef: ComponentRef<CeModalComponent> | null;
  private overlayRef: OverlayRef;
  constructor(private overlay: Overlay, options:CeModalOptions = {}) {
    this.createModal();
    if (!('getContainer' in options)) {
      options.getContainer = undefined;
    }
    this.changeProperties(options);
// tslint:disable-next-line: no-non-null-assertion
    this.modalRef!.instance.open();
// tslint:disable-next-line: no-non-null-assertion
    this.modalRef!.instance.ceAfterClose.subscribe(() => this.destroyModal())
  }
  getInstance(): CeModalComponent | null {
    return this.modalRef && this.modalRef.instance;
  }
  destroyModal(): void {
    if (this.modalRef) {
      this.overlayRef.dispose();
      this.modalRef = null;
    }
  }
  private changeProperties(options:CeModalOptions):void {
    if(this.modalRef) {
      Object.assign(this.modalRef.instance, options);
    }
  }
  private createModal():void{
    this.overlayRef = this.overlay.create();
    this.modalRef = this.overlayRef.attach( new ComponentPortal(CeModalComponent));
  }
}

@Injectable()
export class CeModalService {

  constructor(private overlay: Overlay, private modalControl: CeModalControlService) { }
  get openModals(): CeModalRef[] {
    return this.modalControl.openModals;
  }
  // get afterAllClose(): Observable<void> {
  //   return this.modalControl.afterAllClose.asObservable();
  // }

  closeAll(): void {
    this.modalControl.closeAll();
  }
  create<T>(options: CeModalOptions<T>= {}): CeModalRef<T> {
    if (typeof options.onOk === 'function'){
      options.onOk = () => {};
    }
// tslint:disable-next-line: no-non-null-assertion
    const modalRef = new ModalBuilder(this.overlay, options).getInstance()!;
    return modalRef;
  }


}

