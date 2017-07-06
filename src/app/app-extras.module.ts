require('style-loader!./app.scss');

import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';

import { StacheDemoComponentService } from './components/demo-component.service';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    StacheModule
  ],
  providers: [
    StacheDemoComponentService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
