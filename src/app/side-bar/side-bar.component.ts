import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  earth_pic: string = "";
  space_pic: string = "";
  earth_cap: string = "";
  space_cap: string = "";



  constructor() { }

  ngOnInit(): void {
  }

}
