import {
  NgModule
} from '@angular/core';

import {
  SkyCodeBlockModule
} from '@blackbaud/skyux-lib-code-block';

import {
  StacheActionButtonsModule,
  StacheAffixModule,
  StacheAnalyticsModule,
  StacheBackToTopModule,
  StacheBlockquoteModule,
  StacheBreadcrumbsModule,
  StacheCodeModule,
  StacheEditButtonModule,
  StacheHideFromSearchModule,
  StacheIncludeModule,
  StacheLayoutModule,
  StacheMarkdownModule,
  StacheNavModule,
  StachePageAnchorModule,
  StachePageHeaderModule,
  StachePageSummaryModule,
  StacheRouterModule,
  StacheSidebarModule,
  StacheTableOfContentsModule,
  StacheTutorialModule,
  StacheTutorialStepModule,
  StacheWrapperModule
} from '@blackbaud/skyux-lib-stache';

import {
  SkyClipboardModule
} from '@blackbaud/skyux-lib-clipboard';

import {
  SkyHeroModule,
  SkyImageModule,
  SkyVideoModule
} from '@blackbaud/skyux-lib-media';

@NgModule({
  exports: [
    StacheActionButtonsModule,
    StacheAffixModule,
    StacheAnalyticsModule,
    StacheBackToTopModule,
    StacheBlockquoteModule,
    StacheBreadcrumbsModule,
    StacheCodeModule,
    StacheEditButtonModule,
    StacheHideFromSearchModule,
    StacheIncludeModule,
    StacheLayoutModule,
    StacheMarkdownModule,
    StacheNavModule,
    StachePageAnchorModule,
    StachePageHeaderModule,
    StachePageSummaryModule,
    StacheRouterModule,
    StacheSidebarModule,
    StacheTableOfContentsModule,
    StacheTutorialModule,
    StacheTutorialStepModule,
    StacheWrapperModule,
    SkyClipboardModule,
    SkyCodeBlockModule,
    SkyHeroModule,
    SkyImageModule,
    SkyVideoModule
  ]
})
export class AppStacheModule { }
