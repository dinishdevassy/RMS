import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestownerComponent } from './restowner.component';

describe('RestownerComponent', () => {
  let component: RestownerComponent;
  let fixture: ComponentFixture<RestownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
