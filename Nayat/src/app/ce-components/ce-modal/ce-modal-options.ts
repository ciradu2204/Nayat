import { TemplateRef, Type, EventEmitter } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';

export type OnClickCallback<T>= ((instance: T) => (false|void|{})|Promise<false|void|{}>);

export interface CeModalOptions <T= any, R= any> {
    visible ?: boolean;
    zIndex ?: number;
    bgStyle ?: object;
    ceStyle ?: object;
    modalTitle?: string|TemplateRef<{}>|Type<T>;
    modalText ?: string | TemplateRef<{}> | Type<T>;
    modalFooter ?: string | TemplateRef<{}>|Type<T> ;
    modalClosable ?: boolean;
    bgClosable ?: boolean;
    tranparentBg?:boolean;
    getContainer ?: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    ceAfteOpen ?: EventEmitter<void>;
    ceAfterClose ?: EventEmitter<R>;
    onOk ?: EventEmitter<T> | OnClickCallback<T>;
    onCancel ?: EventEmitter<T> | OnClickCallback<T>;
    cancelText ?: string;
    okText ?: string;
}
