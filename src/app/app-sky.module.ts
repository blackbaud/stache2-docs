import {
  NgModule
} from '@angular/core';

import {
  SkyClipboardModule
} from '@blackbaud/skyux-lib-clipboard';

import {
  SkyCodeBlockModule,
  SkyCodeModule
} from '@blackbaud/skyux-lib-code-block';

import {
  SkyImageModule,
  SkyHeroModule,
  SkyVideoModule
} from '@blackbaud/skyux-lib-media';

import {
  SkyRestrictedViewModule
} from '@blackbaud/skyux-lib-restricted-view';

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

@NgModule({
  exports: [
    SkyAlertModule,
    SkyCardModule,
    SkyClipboardModule,
    SkyCodeBlockModule,
    SkyCodeModule,
    SkyDefinitionListModule,
    SkyDropdownModule,
    SkyFluidGridModule,
    SkyHeroModule,
    SkyImageModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyRepeaterModule,
    SkyRestrictedViewModule,
    SkyTabsModule,
    SkyTextExpandModule,
    SkyTextExpandRepeaterModule,
    SkyVideoModule
  ]
})
export class AppSkyModule { }
