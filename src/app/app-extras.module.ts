require('style-loader!./app.scss');

import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';

import { StacheDemoContentService } from './content/demo-content.service';

import {
  SkyHeroModule,
  SkyImageModule,
  SkyVideoModule
} from '@blackbaud/skyux-lib-media';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    SkyHeroModule,
    SkyImageModule,
    SkyVideoModule,
    StacheModule
  ],
  providers: [
    StacheDemoContentService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
