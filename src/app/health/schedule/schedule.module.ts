import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ScheduleRoutingModule } from './schedule-routing.module'
// components
import { ScheduleCalendarComponent } from './schedule-page/schedule-calendar/schedule-calendar.component';
import { ScheduleDaysComponent } from './schedule-page/schedule-calendar/schedule-days/schedule-days.component';
import { ScheduleControlsComponent } from './schedule-page/schedule-calendar/schedule-controls/schedule-controls.component';

// containers
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import {ScheduleSectionComponent} from './schedule-page/schedule-calendar/schedule-section/schedule-section.component';
import {ScheduleAssignComponent} from './schedule-page/schedule-assign/schedule-assign.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScheduleRoutingModule,
    SharedModule
  ],
  declarations: [
    SchedulePageComponent,
    ScheduleCalendarComponent,
    ScheduleDaysComponent,
    ScheduleControlsComponent,
    ScheduleSectionComponent,
    ScheduleAssignComponent
  ]
})
export class ScheduleModule {}

