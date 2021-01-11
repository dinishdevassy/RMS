import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewitemComponent } from './userviewitem.component';

describe('UserviewitemComponent', () => {
  let component: UserviewitemComponent;
  let fixture: ComponentFixture<UserviewitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserviewitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
