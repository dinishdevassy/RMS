import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantheaderComponent } from './restaurantheader.component';

describe('RestaurantheaderComponent', () => {
  let component: RestaurantheaderComponent;
  let fixture: ComponentFixture<RestaurantheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
