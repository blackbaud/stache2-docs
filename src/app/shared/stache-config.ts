import { Inject } from '@angular/core';

import { SkyAppConfig } from '@blackbaud/skyux-builder/runtime';
import { STACHE_CONFIG_TRANSFORMERS } from '@blackbaud/stache';

export class StacheAppConfig {
  constructor(
    @Inject(SkyAppConfig)
    public config: SkyAppConfig) { }
}

export const stacheConfigProvider = {
  provide: STACHE_CONFIG_TRANSFORMERS,
  multi: true,
  useClass: StacheAppConfig
};
