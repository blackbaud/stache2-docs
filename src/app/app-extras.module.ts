import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/skyux-lib-stache';

import { StacheDemoContentService } from './components/demo-content.service';

// Specify entry components, module-level providers, etc. here.
import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    AppSkyModule,
    StacheModule
  ],
  providers: [
    StacheDemoContentService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
