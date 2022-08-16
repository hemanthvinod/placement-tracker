import { AfterViewInit,ChangeDetectorRef, Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import{ BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements AfterViewInit,OnInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  constructor(private observer:BreakpointObserver, private changed:ChangeDetectorRef,private rout:Router) { }

  ngOnInit(): void {
  }

  homeClick()
  {
    this.rout.navigateByUrl('/adminhome')
  }
  studntClick(){
    this.rout.navigateByUrl('/students');
  }
  employerClick(){
    this.rout.navigateByUrl('/employers');
  }
  vacancyClick(){
    this.rout.navigateByUrl('/vacancies');
  }
  matchClick(){
    this.rout.navigateByUrl('/vacancymatch');
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
