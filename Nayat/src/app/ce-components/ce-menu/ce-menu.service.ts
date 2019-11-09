import { Injectable, ComponentRef } from '@angular/core';
import { CeMenuComponent } from './ce-menu.component';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { MenuOptions } from './ce-menu-options';
import { takeUntil } from 'rxjs/operators';
import { ComponentPortal } from '@angular/cdk/portal';


export class MenuBuilder<R> {
  private menuRef: ComponentRef<CeMenuComponent>;
  private overlayRef: OverlayRef;
  private unsubscribe$ = new Subject<void>();
  constructor(
    private overlay: Overlay,
    private options: MenuOptions= {}) {
      this.createMenu();
      this.updateOptions(options);
      this.menuRef.instance.savePreviouslyFocusedElement();
      this.menuRef.instance.nzOnViewInit
      .pipe(takeUntil(this.unsubscribe$)) 
      .subscribe(() => {
        this.menuRef.instance.open();
      });
      this.menuRef.instance.onClose
      .subscribe(() => {
        this.menuRef.instance.close();
      });
  
  }
  createMenu(): void {
    this.overlayRef = this.overlay.create();
    this.menuRef = this.overlayRef.attach(new ComponentPortal(CeMenuComponent))
  }
  updateOptions(options: MenuOptions): void {
    if (this.menuRef) {
      Object.assign(this.menuRef.instance, options);
    }
  }
  getInstance() {
    return this.menuRef && this.menuRef.instance;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CeMenuService {
  constructor(private overlay: Overlay) { }
  create<T = any, D = any, R = any>(options: MenuOptions<T, D>) {
    return new MenuBuilder<R>(this.overlay, options).getInstance();
  }
}
