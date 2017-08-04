import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPageComponent } from './workout-page.component';

describe('WorkoutPageComponent', () => {
  let component: WorkoutPageComponent;
  let fixture: ComponentFixture<WorkoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
