import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewrestaurantComponent } from './userviewrestaurant.component';

describe('UserviewrestaurantComponent', () => {
  let component: UserviewrestaurantComponent;
  let fixture: ComponentFixture<UserviewrestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserviewrestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
