import { NgModule } from '@angular/core';
import { HealthRoutingModule } from './health-routing.module';

// shared modules
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    HealthRoutingModule,
    SharedModule.forRoot()
  ]
})
export class HealthModule {}
