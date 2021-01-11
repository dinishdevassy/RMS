import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminremoverestComponent } from './adminremoverest.component';

describe('AdminremoverestComponent', () => {
  let component: AdminremoverestComponent;
  let fixture: ComponentFixture<AdminremoverestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminremoverestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminremoverestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
