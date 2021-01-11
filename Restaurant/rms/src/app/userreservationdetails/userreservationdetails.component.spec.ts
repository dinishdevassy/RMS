import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreservationdetailsComponent } from './userreservationdetails.component';

describe('UserreservationdetailsComponent', () => {
  let component: UserreservationdetailsComponent;
  let fixture: ComponentFixture<UserreservationdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserreservationdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserreservationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
