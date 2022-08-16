import { AfterViewInit, ChangeDetectorRef, Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import{ BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements AfterViewInit,OnInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  
  constructor(private observer:BreakpointObserver, private changed:ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }
      else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    });
    this.changed.detectChanges();
  }

}
