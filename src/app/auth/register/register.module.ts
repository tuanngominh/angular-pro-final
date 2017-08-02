import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ],
  declarations: [RegisterPageComponent]
})
export class RegisterModule { }
