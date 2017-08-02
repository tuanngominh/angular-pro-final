import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { Store } from '../store';

// feature modules
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';

// containers
import { AppComponent } from './app.component';

// components
import { AppHeaderComponent } from './core/components/app-header/app-header.component';
import { AppNavComponent } from './core/components/app-nav/app-nav.component';

// routes
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HealthModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
