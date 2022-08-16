import { AfterViewInit, ChangeDetectorRef, Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  
  constructor() { }

  ngOnInit(): void {
    
  }
 

}
