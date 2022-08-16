import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyMatchingComponent } from './vacancy-matching.component';

describe('VacancyMatchingComponent', () => {
  let component: VacancyMatchingComponent;
  let fixture: ComponentFixture<VacancyMatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyMatchingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
