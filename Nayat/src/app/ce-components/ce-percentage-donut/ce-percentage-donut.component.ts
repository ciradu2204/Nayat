import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { RoundProgressEase } from 'angular-svg-round-progressbar';

@Component({
  selector: 'ce-percentage-donut',
  templateUrl: './ce-percentage-donut.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CePercentageDonutComponent implements OnInit {
 @Input('percentage') current: number;
  max: number = 100;
  stroke: number = 4;
  radius: number=20;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#1DD1A1';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;

  constructor(private _ease: RoundProgressEase) {
    for (let prop in _ease) {
      if (prop.toLowerCase().indexOf('ease') > -1) {
        this.animations.push(prop);
      };
    }
   }
   increment(amount = 1) {
    this.current += amount;
  }
   getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 1.8 + 'px'
    };
  }

  ngOnInit() {
  }

}
