import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducer} from './data/data.reducer';
import {EffectsModule} from '@ngrx/effects';
import {DataEffects} from './data/data.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('data', reducer),
    EffectsModule.forFeature([DataEffects])
  ],
  declarations: []
})
export class CoreModule { }
