import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';
import { stacheConfigProvider } from './lib/stache-config';

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
    stacheConfigProvider,
    StacheDemoComponentService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
