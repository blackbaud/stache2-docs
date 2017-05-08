import { NgModule } from '@angular/core';

import { StacheModule, StacheConfigService } from '@blackbaud/stache';
import { SkyAppConfig } from '@blackbaud/skyux-builder/runtime';

import { StacheDemoComponentService } from './components/demo-component.service';

require('style-loader!./app.scss');

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
  ]
})
export class AppExtrasModule { }
