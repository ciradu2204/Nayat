import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-chatinterface',
  templateUrl: './chatinterface.component.html',
  styleUrls: ['./chatinterface.component.scss'],
})
export class ChatinterfaceComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
   floating(){
    this.router.navigate([`/floating`], { relativeTo: this.route });
   }
  ngOnInit() {}

}
