import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-calendar',
  styleUrls: ['schedule-calendar.component.scss'],
  template: `
    <div class="calendar">
      {{ date | json }}
    </div>
  `
})
export class ScheduleCalendarComponent {

  @Input()
  date: Date;

  constructor() {}
}