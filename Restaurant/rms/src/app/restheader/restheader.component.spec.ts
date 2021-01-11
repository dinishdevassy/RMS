import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestheaderComponent } from './restheader.component';

describe('RestheaderComponent', () => {
  let component: RestheaderComponent;
  let fixture: ComponentFixture<RestheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
