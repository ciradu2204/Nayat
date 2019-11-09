import { CommonService } from '../common-services.service';
import { Component, OnInit, Input, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

export type color = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'dark' | 'medium' | 'light';

@Component({
  selector: 'ce-badge',
  templateUrl: './ce-badge.component.html',
  styleUrls: ['./ce-badge.component.scss'],
  providers: [CommonService],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'badge'
  }

})
export class CeBadgeComponent implements OnInit {
  private _rounded: boolean;
  @Input() color: color='dark';
  @Input()
  set rounded(value: boolean) {
    this._rounded = "" + value !== 'false';
  }
  get rounded(): boolean {
    return this._rounded;
  }
  private element: HTMLElement = this.elementRef.nativeElement;
  isNotNull(value: any): boolean {
    return (typeof (value) !== 'undefined' && value !== null)
  }
  constructor(public elementRef: ElementRef, public render: Renderer2, public updateClassService: CommonService) { }

  setClass(): void {
    const classMap = {}
    if (this.isNotNull(this.color)) {
      classMap['badge-primary'] = this.color === 'primary';
      classMap['badge-secondary'] = this.color === 'secondary';
      classMap['badge-tertiary'] = this.color === 'tertiary';
      classMap['badge-success'] = this.color === 'success';
      classMap['badge-warning'] = this.color === 'warning';
      classMap['badge-danger'] = this.color === 'danger';
      classMap['badge-dark'] = this.color === 'dark';
      classMap['badge-medium'] = this.color === 'medium';
      classMap['badge-light'] = this.color === 'light';
      classMap['badge-pill'] = this.rounded;
    }
    this.updateClassService.updateClass(this.element, classMap);
  }

  ngOnInit() {
    this.setClass();
  }

}

