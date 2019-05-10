require('style-loader!./app.scss');

import { NgModule } from '@angular/core';

import { StacheDemoContentService } from './components/demo-content.service';

// Specify entry components, module-level providers, etc. here.
import {
  AppSkyModule
} from './app-sky.module';

import {
  AppStacheModule
} from './app-stache.module';

@NgModule({
  imports: [],
  exports: [
    AppSkyModule,
    AppStacheModule
  ],
  providers: [
    StacheDemoContentService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
