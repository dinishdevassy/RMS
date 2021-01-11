import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewrestitemComponent } from './userviewrestitem.component';

describe('UserviewrestitemComponent', () => {
  let component: UserviewrestitemComponent;
  let fixture: ComponentFixture<UserviewrestitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserviewrestitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewrestitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
