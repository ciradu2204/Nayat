import { Component, OnInit, Input } from '@angular/core';
import { RoundProgressEase } from 'angular-svg-round-progressbar';

@Component({
  selector: 'ce-donut-timer',
  templateUrl: './ce-donut-timer.component.html',
  styleUrls: ['./ce-donut-timer.component.scss']
})
export class CeDonutTimerComponent implements OnInit {
 @Input() current: number;
 @Input() max: number;
  stroke: number = 4;
 @Input() radius: number;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#f04141';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;

  toDisplay:string;

  constructor(private RoundProgressEase: RoundProgressEase) {

    for (let prop in RoundProgressEase) {
      if (prop.toLowerCase().indexOf('ease') > -1) {
        this.animations.push(prop);
      };
    }
  }
  ngOnInit() {
    this.startTimer();
  }

  getSecondsAsDigitalClock(inputSeconds: number): string {
    var sec_num = parseInt(inputSeconds.toString(),10);
    var hours =  Math.floor(sec_num/3600);
    var mins= Math.floor((sec_num - (hours*3600))/60);
    var secs = sec_num - (hours * 3600) - (mins*60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    if(hours==0 && mins==0 && secs!=0){
      secondsString = (secs < 10) ? "" + secs : secs.toString();
      return secondsString+ 's';
    }
    else if(hours==0 && secs!=0 && mins!=0){
      mins+=1;
      minutesString = (mins < 10) ? "" + mins : mins.toString();
      
      return minutesString + 'm';
    }else if(hours!=0 && secs!=0 && mins!=0){
      hours+=1
      hoursString = (hours < 10) ? "" + hours : hours.toString();
      return hoursString + 'h';
    }else{
      return "";
    }
    
  }
  
  startTimer(){
    setInterval(()=>{
      if(this.current>0){
        this.current--
        this.toDisplay=this.getSecondsAsDigitalClock(this.current);
      }else{
        clearInterval();
      }
    },1000)
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


}

