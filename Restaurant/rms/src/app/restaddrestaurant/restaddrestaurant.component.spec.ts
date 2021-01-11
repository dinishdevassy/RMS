import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaddrestaurantComponent } from './restaddrestaurant.component';

describe('RestaddrestaurantComponent', () => {
  let component: RestaddrestaurantComponent;
  let fixture: ComponentFixture<RestaddrestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaddrestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaddrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
