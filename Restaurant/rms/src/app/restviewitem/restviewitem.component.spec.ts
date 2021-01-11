import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestviewitemComponent } from './restviewitem.component';

describe('RestviewitemComponent', () => {
  let component: RestviewitemComponent;
  let fixture: ComponentFixture<RestviewitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestviewitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestviewitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
