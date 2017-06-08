import { NgModule } from '@angular/core';

import { SkyAppConfig } from '@blackbaud/skyux-builder/runtime';
import { StacheModule, StacheConfigService } from '@blackbaud/stache';

import { StacheDemoComponentService } from './components/demo-component.service';

require('style-loader!./app.scss');

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    StacheModule
  ],
  providers: [
    {
      provide: StacheConfigService,
      useExisting: SkyAppConfig
    },
    StacheDemoComponentService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
