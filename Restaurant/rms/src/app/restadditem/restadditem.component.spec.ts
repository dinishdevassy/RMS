import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestadditemComponent } from './restadditem.component';

describe('RestadditemComponent', () => {
  let component: RestadditemComponent;
  let fixture: ComponentFixture<RestadditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestadditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestadditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
