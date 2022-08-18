import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from'@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { EmployerListComponent } from './pages/admin/employer-list/employer-list.component';
import { StudentsListComponent } from './pages/admin/students-list/students-list.component';
import { VacanciesComponent } from './pages/admin/vacancies/vacancies.component';
import { VacancyMatchingComponent } from './pages/admin/vacancy-matching/vacancy-matching.component';
import { AdminheaderComponent } from './pages/admin/adminheader/adminheader.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    EmployerListComponent,
    StudentsListComponent,
    VacanciesComponent,
    VacancyMatchingComponent,
    AdminheaderComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
