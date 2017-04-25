import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    StacheModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
