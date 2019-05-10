import {
  NgModule
} from '@angular/core';

import {
  SkyAlertModule,
  SkyKeyInfoModule,
  SkyLabelModule
} from '@skyux/indicators';

import {
  SkyDefinitionListModule,
  SkyFluidGridModule,
  SkyTextExpandModule,
  SkyTextExpandRepeaterModule,
  SkyCardModule
} from '@skyux/layout';

import {
  SkyRepeaterModule
} from '@skyux/lists';

import {
  SkyDropdownModule
} from '@skyux/popovers';

import {
  SkyTabsModule
} from '@skyux/tabs';

import {
  SkyRestrictedViewModule
} from '@blackbaud/skyux-lib-restricted-view';

@NgModule({
  exports: [
    SkyAlertModule,
    SkyCardModule,
    SkyDefinitionListModule,
    SkyDropdownModule,
    SkyFluidGridModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyRepeaterModule,
    SkyTabsModule,
    SkyTextExpandModule,
    SkyTextExpandRepeaterModule,
    SkyRestrictedViewModule
  ]
})
export class AppSkyModule { }
