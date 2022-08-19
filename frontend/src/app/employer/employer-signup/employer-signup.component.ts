import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-signup',
  templateUrl: './employer-signup.component.html',
  styleUrls: ['./employer-signup.component.css'],
})
export class EmployerSignupComponent implements OnInit {
  newEmployer = {
    employerName: '',
    companyName: '',
    phone: '',
    email: '',
    gsdPin: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
