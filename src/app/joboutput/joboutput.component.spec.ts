import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoboutputComponent } from './joboutput.component';

describe('JoboutputComponent', () => {
  let component: JoboutputComponent;
  let fixture: ComponentFixture<JoboutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoboutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoboutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
