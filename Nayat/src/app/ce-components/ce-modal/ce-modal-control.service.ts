import { Injectable, Optional, SkipSelf } from '@angular/core';
import { CeModalRef } from './ce-modal.ref';
import { Subscription, Subject } from 'rxjs';

interface ModalControl{
  modalRef:CeModalRef,
  afterOpenSubscription:Subscription,
  afterCloseSubscription:Subscription
}
@Injectable()
export class CeModalControlService {
  private rootOpenModals:CeModalRef[] | null =this.parentService?null:[];
  private rootAfterAllClose: Subject<void> | null = this.parentService ? null : new Subject<void>();
  private rootRegisterModal:Map<CeModalRef,ModalControl> | null =this.parentService ? null : new Map();
//   get afterAllClose():Subject<void>{
//     return this.parentService? this.afterAllClose:this.rootAfterAllClose;
//   }
  get openModals():CeModalRef[]{
// tslint:disable-next-line: no-non-null-assertion
    return this.parentService ? this.parentService.openModals : this.rootOpenModals!;
  }  
  get registeredModal():Map<CeModalRef,ModalControl>{
    return this.parentService ? this.parentService.registeredModal :this.rootRegisterModal;
  }
  hasRegistered(modalRef:CeModalRef):boolean{
    return this.registeredModal.has(modalRef);
  }
  registerModal(modalRef:CeModalRef):void{
    if(!this.hasRegistered(modalRef)){
      const afterOpenSubscription=modalRef.afterOpen.subscribe(()=>this.openModals.push(modalRef));
      const afterCloseSubscription=modalRef.afterClose.subscribe(()=>this.removeModal(modalRef));
      this.registeredModal.set(modalRef,{modalRef,afterOpenSubscription,afterCloseSubscription});
    }
  }
  deregisterModal(modalRef:CeModalRef):void{
    const registeredModals=this.registeredModal.get(modalRef);
    if(registeredModals){
      this.removeModal(registeredModals.modalRef);
      registeredModals.afterOpenSubscription.unsubscribe();
      registeredModals.afterCloseSubscription.unsubscribe();
      this.registeredModal.delete(modalRef);
    }
  }
  removeModal(modalRef:CeModalRef):void{
    const index=this.openModals.indexOf(modalRef);
    if(index>-1){
      this.openModals.splice(index,1);
      if(!this.openModals.length){
        //this.afterAllClose.next();
      }
    }
  }
  closeAll():void{
    let i =this.openModals.length;
    while(i--){
      this.openModals[i].close();
    }
  }
  constructor(
    @Optional() @SkipSelf() private parentService:CeModalControlService
  ) { }
}
