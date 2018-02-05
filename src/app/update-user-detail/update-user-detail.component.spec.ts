import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserDetailComponent } from './update-user-detail.component';

describe('UpdateUserDetailComponent', () => {
  let component: UpdateUserDetailComponent;
  let fixture: ComponentFixture<UpdateUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
