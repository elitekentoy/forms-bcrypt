import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseroutputComponent } from './useroutput.component';

describe('UseroutputComponent', () => {
  let component: UseroutputComponent;
  let fixture: ComponentFixture<UseroutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseroutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseroutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
