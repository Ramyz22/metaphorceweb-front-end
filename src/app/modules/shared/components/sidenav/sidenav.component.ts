import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList; 
  menunav = [
    {name: "Home", route: "home", icon: "home"},
    {name: "Employee", route: "employee", icon: "group"},
    {name: "Contract", route: "contract", icon: "assignment"},
    
  ]

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
   }

  ngOnInit(): void {
  }

}
