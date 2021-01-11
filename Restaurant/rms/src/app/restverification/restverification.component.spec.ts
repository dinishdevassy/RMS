import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestverificationComponent } from './restverification.component';

describe('RestverificationComponent', () => {
  let component: RestverificationComponent;
  let fixture: ComponentFixture<RestverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
