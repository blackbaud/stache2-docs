require('style-loader!./app.scss');

import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';

import { StacheDemoComponentService } from './api/components/demo-component.service';

import { StacheDemoContentService } from './content/demo-content.service';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    StacheModule
  ],
  providers: [
    StacheDemoComponentService,
    StacheDemoContentService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
