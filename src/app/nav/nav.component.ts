import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'Dynamic-study'; // type script
  //appTitle = 'myapp'; js syntax

  constructor() { }

  ngOnInit() {
  }

}
