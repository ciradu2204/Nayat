import { TemplateRef } from '@angular/core';
export interface  MenuOptions <T = any, D = any> {
    menuClosable?: boolean;
    maskClosable?: boolean;
    mask?: boolean;
    menuTitle?: string | TemplateRef<{}>;
    menuContent?: string | TemplateRef<{}>;
    maskStyle?: object;
    bodyStyle?: object;
    wrapClassName?: string;
    menuWidth?: string | number;
    menuHeight?: string | number ;
    zIndex?: number;
    offsetX?: number;
    offsetY?: number;
    alignment?: string;
}