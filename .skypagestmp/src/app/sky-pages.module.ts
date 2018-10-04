

import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import '../../src/main';
import {
  SkyModule
} from '@blackbaud/skyux/dist/core';
import {
  AppExtrasModule
} from '../../src/app/app-extras.module';
import { SkyAppBootstrapper, SkyAppConfig, SkyAppRuntimeConfigParams, SkyAppWindowRef, SkyAuthTokenProvider, SkyAppStyleLoader, SkyAppViewportService } from '@blackbaud/skyux-builder/runtime';
import { SkyAppRuntimeModule } from '@blackbaud/skyux-builder/runtime/runtime.module';
import { SkyAppAssetsService } from '@blackbaud/skyux-builder/runtime/assets.service';

export class SkyAppAssetsImplService {
  public getUrl(filePath: string): string {
    const pathMap: {[key: string]: any} = {
      'consumer.jpg': '/stache/assets/consumer.ce3e3d7c39dd633ed98ae417465a22c68bb22ecb.jpg',
      'content-developer.jpg': '/stache/assets/content-developer.29dd0f5883e71c4fe43aa44f63d1ba17dfac9bb9.jpg',
      'github_clone.png': '/stache/assets/github_clone.52c45fa61ee964d68c454d764bc8112c6211b8fd.png',
      'hero-sample-1.jpg': '/stache/assets/hero-sample-1.380b3aa5f9ff0c741f6efadab9404cacdbc16fef.jpg',
      'locales/resources_en_US.json': '/stache/assets/locales/resources_en_US.4a54fd6c227a84afba04461dbbbcdbd44d0f103c.json',
      'masterbranchmenu.jpg': '/stache/assets/masterbranchmenu.32ade3308ec45be0ac33067caebde0a95683d67d.jpg',
      'masterbranchsecurity.jpg': '/stache/assets/masterbranchsecurity.8ee125522d70144a033657f8354fc530135d9ce7.jpg',
      'stache-einstein-hero.jpg': '/stache/assets/stache-einstein-hero.6f1575a5944b28b517c1018a15d0afb293a14597.jpg',
      'vimeo-video.png': '/stache/assets/vimeo-video.cd72fea017b1f616585222831a7b0ad16ca8e03a.png',
      'vsts_git_clone.jpg': '/stache/assets/vsts_git_clone.77090edc543803e9cfc42e10c38a4c4d533207c6.jpg',
      'vsts_git_copy.jpg': '/stache/assets/vsts_git_copy.02f48d07a800b204d4a85cb84af6a7b64e32d7a6.jpg',
      'vsts_git_search.jpg': '/stache/assets/vsts_git_search.3b967d9e9879391cd16c6cc95771ad703a491e91.jpg',
      'vsts-editor-01-address.png': '/stache/assets/vsts-editor-01-address.fc85797ecc52665a351a394e6bbcb8a5b0360d58.png',
      'vsts-editor-02-repository.png': '/stache/assets/vsts-editor-02-repository.00a41164a11e1e096e641280a0fbc56bc756f27c.png',
      'vsts-editor-03-new-branch.png': '/stache/assets/vsts-editor-03-new-branch.66bac35f6c30d322af162f519a0ad6a29b66edaf.png',
      'youtube-video.png': '/stache/assets/youtube-video.11a7e54838a359007124a222a6e4e8b00e73ad5b.png'
    };

    return pathMap[filePath];
  }
}



export function SkyAppConfigFactory(windowRef: SkyAppWindowRef): any {
  const config: any = {"runtime":{"app":{"inject":false,"template":"/Users/lindseyro/Documents/Git/stache2-docs/node_modules/@blackbaud/skyux-builder/src/main.ejs","base":"/stache/"},"command":"build","componentsPattern":"**/*.component.ts","componentsIgnorePattern":"./public/**/*","includeRouteModule":true,"routesPattern":"**/index.html","runtimeAlias":"@blackbaud/skyux-builder/runtime","srcPath":"src/app/","spaPathAlias":"../..","skyPagesOutAlias":"../..","skyuxPathAlias":"@blackbaud/skyux/dist","useTemplateUrl":true,"handle404":true,"routes":[{"routePath":"content/action-buttons","routeParams":[]},{"routePath":"content/affix-top","routeParams":[]},{"routePath":"content/alerts","routeParams":[]},{"routePath":"content/blockquote","routeParams":[]},{"routePath":"content/buttons","routeParams":[]},{"routePath":"content/cards","routeParams":[]},{"routePath":"content/clipboard","routeParams":[]},{"routePath":"content/code-block","routeParams":[]},{"routePath":"content/code","routeParams":[]},{"routePath":"content/config-data","routeParams":[]},{"routePath":"content/edit-button","routeParams":[]},{"routePath":"content/footer","routeParams":[]},{"routePath":"content/grid","routeParams":[]},{"routePath":"content/hero","routeParams":[]},{"routePath":"content/image","routeParams":[]},{"routePath":"content/include","routeParams":[]},{"routePath":"content","routeParams":[]},{"routePath":"content/labels","routeParams":[]},{"routePath":"content/layouts","routeParams":[]},{"routePath":"content/link","routeParams":[]},{"routePath":"content/markdown","routeParams":[]},{"routePath":"content/navigation","routeParams":[]},{"routePath":"content/page-anchor","routeParams":[]},{"routePath":"content/page-summary","routeParams":[]},{"routePath":"content/repeater","routeParams":[]},{"routePath":"content/search","routeParams":[]},{"routePath":"content/table-of-contents","routeParams":[]},{"routePath":"content/tabs","routeParams":[]},{"routePath":"content/text-expand","routeParams":[]},{"routePath":"content/tutorial","routeParams":[]},{"routePath":"content/video","routeParams":[]},{"routePath":"content/wrapper","routeParams":[]},{"routePath":"","routeParams":[]},{"routePath":"learn/basics","routeParams":[]},{"routePath":"learn/get-started/add-stache","routeParams":[]},{"routePath":"learn/get-started/clone-install","routeParams":[]},{"routePath":"learn/get-started","routeParams":[]},{"routePath":"learn/get-started/new-stache","routeParams":[]},{"routePath":"learn","routeParams":[]},{"routePath":"learn/migrate","routeParams":[]},{"routePath":"learn/plugins/email-whitelist","routeParams":[]},{"routePath":"learn/plugins","routeParams":[]},{"routePath":"learn/plugins/stache","routeParams":[]},{"routePath":"learn/update-stache","routeParams":[]},{"routePath":"support/changelog/2017/2017-05","routeParams":[]},{"routePath":"support/changelog/2017/2017-06","routeParams":[]},{"routePath":"support/changelog/2017/2017-07","routeParams":[]},{"routePath":"support/changelog/2017/2017-08","routeParams":[]},{"routePath":"support/changelog/2017/2017-09","routeParams":[]},{"routePath":"support/changelog/2017/2017-10","routeParams":[]},{"routePath":"support/changelog/2017/2017-11","routeParams":[]},{"routePath":"support/changelog/2017","routeParams":[]},{"routePath":"support/changelog/2018-01","routeParams":[]},{"routePath":"support/changelog/2018-03","routeParams":[]},{"routePath":"support/changelog/2018-04","routeParams":[]},{"routePath":"support/changelog/2018-05","routeParams":[]},{"routePath":"support/changelog/2018-06","routeParams":[]},{"routePath":"support/changelog","routeParams":[]},{"routePath":"support/contribute/developer","routeParams":[]},{"routePath":"support/contribute","routeParams":[]},{"routePath":"support","routeParams":[]},{"routePath":"support/troubleshoot","routeParams":[]},{"routePath":"support/why-stache","routeParams":[]},{"routePath":""},{"routePath":"**","routeParams":[]}]},"skyux":{"$schema":"./node_modules/@skyux/config/skyuxconfig-schema.json","mode":"easy","host":{"url":"https://host.nxt.blackbaud.com"},"app":{"title":"Blackbaud Stache Documentation"},"compileMode":"aot","params":{"addin":true,"envid":true,"leid":true,"svcid":true},"skyuxModules":["SkyModule"],"name":"stache","plugins":["@blackbaud/skyux-builder-plugin-stache"],"appSettings":{"stache":{"editButton":{"url":"https://github.com/blackbaud/stache2-docs"},"searchConfig":{"is_internal":false},"footer":{}}},"auth":false,"omnibar":{"experimental":true,"nav":{"services":[{"title":"Stache Docs","searchUrl":"https://stache-search-query.sky.blackbaud.com/search/stache","items":[{"title":"Home","route":"/"},{"title":"Learn","items":[{"title":"Getting started","route":"/learn/get-started"},{"title":"Basics","route":"/learn/basics"},{"title":"Update Stache","route":"/learn/update-stache"},{"title":"Migrate Stache","route":"/learn/migrate"},{"title":"Plugins","route":"/learn/plugins"},{"title":"Blackbaud staff topics","url":"https://docs.blackbaud.com/stache-internal"}]},{"title":"Components","route":"/content"},{"title":"Support","items":[{"title":"Contact us","route":"/support"},{"title":"Changelog","route":"/support/changelog"},{"title":"Contribute","route":"/support/contribute"},{"title":"Troubleshooting","route":"/support/troubleshoot"},{"title":"Why Stache?","route":"/support/why-stache"}]}]}]}}}};
  config.runtime.params = new SkyAppRuntimeConfigParams(
    windowRef.nativeWindow.location.toString(),
    {"addin":true,"envid":true,"leid":true,"svcid":true}
  );
  return config;
}

// Setting skyux config as static property exclusively for Bootstrapper
SkyAppBootstrapper.config = {"$schema":"./node_modules/@skyux/config/skyuxconfig-schema.json","mode":"easy","host":{"url":"https://host.nxt.blackbaud.com"},"app":{"title":"Blackbaud Stache Documentation"},"compileMode":"aot","params":{"addin":true,"envid":true,"leid":true,"svcid":true},"skyuxModules":["SkyModule"],"name":"stache","plugins":["@blackbaud/skyux-builder-plugin-stache"],"appSettings":{"stache":{"editButton":{"url":"https://github.com/blackbaud/stache2-docs"},"searchConfig":{"is_internal":false},"footer":{}}},"auth":false,"omnibar":{"experimental":true,"nav":{"services":[{"title":"Stache Docs","searchUrl":"https://stache-search-query.sky.blackbaud.com/search/stache","items":[{"title":"Home","route":"/"},{"title":"Learn","items":[{"title":"Getting started","route":"/learn/get-started"},{"title":"Basics","route":"/learn/basics"},{"title":"Update Stache","route":"/learn/update-stache"},{"title":"Migrate Stache","route":"/learn/migrate"},{"title":"Plugins","route":"/learn/plugins"},{"title":"Blackbaud staff topics","url":"https://docs.blackbaud.com/stache-internal"}]},{"title":"Components","route":"/content"},{"title":"Support","items":[{"title":"Contact us","route":"/support"},{"title":"Changelog","route":"/support/changelog"},{"title":"Contribute","route":"/support/contribute"},{"title":"Troubleshooting","route":"/support/troubleshoot"},{"title":"Why Stache?","route":"/support/why-stache"}]}]}]}}};

// BEGIN IMPORTED COMPONENT: StacheDemoContentComponent
import { StacheDemoContentComponent } from '../../src/app/content/demo-content.component';
// END IMPORTED COMPONENT: StacheDemoContentComponent

// BEGIN IMPORTED COMPONENT: SkyDefinitionListDemoComponent
import { SkyDefinitionListDemoComponent } from '../../src/app/learn/basics/definition-list-demo.component';
// END IMPORTED COMPONENT: SkyDefinitionListDemoComponent
// AUTO GENERATED FROM: src/app/content/action-buttons/index.html
@Component({
  templateUrl: '../../src/app/content/action-buttons/index.html'
})
export class SPR_0_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/affix-top/index.html
@Component({
  templateUrl: '../../src/app/content/affix-top/index.html'
})
export class SPR_1_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/alerts/index.html
@Component({
  templateUrl: '../../src/app/content/alerts/index.html'
})
export class SPR_2_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/blockquote/index.html
@Component({
  templateUrl: '../../src/app/content/blockquote/index.html'
})
export class SPR_3_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/buttons/index.html
@Component({
  templateUrl: '../../src/app/content/buttons/index.html'
})
export class SPR_4_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/cards/index.html
@Component({
  templateUrl: '../../src/app/content/cards/index.html'
})
export class SPR_5_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/clipboard/index.html
@Component({
  templateUrl: '../../src/app/content/clipboard/index.html'
})
export class SPR_6_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/code-block/index.html
@Component({
  templateUrl: '../../src/app/content/code-block/index.html'
})
export class SPR_7_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/code/index.html
@Component({
  templateUrl: '../../src/app/content/code/index.html'
})
export class SPR_8_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/config-data/index.html
@Component({
  templateUrl: '../../src/app/content/config-data/index.html'
})
export class SPR_9_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/edit-button/index.html
@Component({
  templateUrl: '../../src/app/content/edit-button/index.html'
})
export class SPR_10_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/footer/index.html
@Component({
  templateUrl: '../../src/app/content/footer/index.html'
})
export class SPR_11_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/grid/index.html
@Component({
  templateUrl: '../../src/app/content/grid/index.html'
})
export class SPR_12_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/hero/index.html
@Component({
  templateUrl: '../../src/app/content/hero/index.html'
})
export class SPR_13_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/image/index.html
@Component({
  templateUrl: '../../src/app/content/image/index.html'
})
export class SPR_14_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/include/index.html
@Component({
  templateUrl: '../../src/app/content/include/index.html'
})
export class SPR_15_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/index.html
@Component({
  templateUrl: '../../src/app/content/index.html'
})
export class SPR_16_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/labels/index.html
@Component({
  templateUrl: '../../src/app/content/labels/index.html'
})
export class SPR_17_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/layouts/index.html
@Component({
  templateUrl: '../../src/app/content/layouts/index.html'
})
export class SPR_18_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/link/index.html
@Component({
  templateUrl: '../../src/app/content/link/index.html'
})
export class SPR_19_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/markdown/index.html
@Component({
  templateUrl: '../../src/app/content/markdown/index.html'
})
export class SPR_20_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/navigation/index.html
@Component({
  templateUrl: '../../src/app/content/navigation/index.html'
})
export class SPR_21_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/page-anchor/index.html
@Component({
  templateUrl: '../../src/app/content/page-anchor/index.html'
})
export class SPR_22_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/page-summary/index.html
@Component({
  templateUrl: '../../src/app/content/page-summary/index.html'
})
export class SPR_23_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/repeater/index.html
@Component({
  templateUrl: '../../src/app/content/repeater/index.html'
})
export class SPR_24_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/search/index.html
@Component({
  templateUrl: '../../src/app/content/search/index.html'
})
export class SPR_25_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/table-of-contents/index.html
@Component({
  templateUrl: '../../src/app/content/table-of-contents/index.html'
})
export class SPR_26_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/tabs/index.html
@Component({
  templateUrl: '../../src/app/content/tabs/index.html'
})
export class SPR_27_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/text-expand/index.html
@Component({
  templateUrl: '../../src/app/content/text-expand/index.html'
})
export class SPR_28_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/tutorial/index.html
@Component({
  templateUrl: '../../src/app/content/tutorial/index.html'
})
export class SPR_29_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/video/index.html
@Component({
  templateUrl: '../../src/app/content/video/index.html'
})
export class SPR_30_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/content/wrapper/index.html
@Component({
  templateUrl: '../../src/app/content/wrapper/index.html'
})
export class SPR_31_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/index.html
@Component({
  templateUrl: '../../src/app/index.html'
})
export class SPR_32_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/learn/basics/index.html
@Component({
  templateUrl: '../../src/app/learn/basics/index.html'
})
export class SPR_33_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/learn/get-started/add-stache/index.html
@Component({
  templateUrl: '../../src/app/learn/get-started/add-stache/index.html'
})
export class SPR_34_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/learn/get-started/clone-install/index.html
@Component({
  templateUrl: '../../src/app/learn/get-started/clone-install/index.html'
})
export class SPR_35_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/learn/get-started/index.html
@Component({
  templateUrl: '../../src/app/learn/get-started/index.html'
})
export class SPR_36_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/learn/get-started/new-stache/index.html
@Component({
  templateUrl: '../../src/app/learn/get-started/new-stache/index.html'
})
export class SPR_37_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/learn/index.html
@Component({
  templateUrl: '../../src/app/learn/index.html'
})
export class SPR_38_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/learn/migrate/index.html
@Component({
  templateUrl: '../../src/app/learn/migrate/index.html'
})
export class SPR_39_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/learn/plugins/email-whitelist/index.html
@Component({
  templateUrl: '../../src/app/learn/plugins/email-whitelist/index.html'
})
export class SPR_40_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/learn/plugins/index.html
@Component({
  templateUrl: '../../src/app/learn/plugins/index.html'
})
export class SPR_41_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/learn/plugins/stache/index.html
@Component({
  templateUrl: '../../src/app/learn/plugins/stache/index.html'
})
export class SPR_42_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/learn/update-stache/index.html
@Component({
  templateUrl: '../../src/app/learn/update-stache/index.html'
})
export class SPR_43_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2017/2017-05/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2017/2017-05/index.html'
})
export class SPR_44_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2017/2017-06/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2017/2017-06/index.html'
})
export class SPR_45_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2017/2017-07/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2017/2017-07/index.html'
})
export class SPR_46_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2017/2017-08/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2017/2017-08/index.html'
})
export class SPR_47_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2017/2017-09/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2017/2017-09/index.html'
})
export class SPR_48_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2017/2017-10/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2017/2017-10/index.html'
})
export class SPR_49_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2017/2017-11/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2017/2017-11/index.html'
})
export class SPR_50_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2017/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2017/index.html'
})
export class SPR_51_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2018-01/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2018-01/index.html'
})
export class SPR_52_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2018-03/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2018-03/index.html'
})
export class SPR_53_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2018-04/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2018-04/index.html'
})
export class SPR_54_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2018-05/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2018-05/index.html'
})
export class SPR_55_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/2018-06/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/2018-06/index.html'
})
export class SPR_56_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/changelog/index.html
@Component({
  templateUrl: '../../src/app/support/changelog/index.html'
})
export class SPR_57_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/contribute/developer/index.html
@Component({
  templateUrl: '../../src/app/support/contribute/developer/index.html'
})
export class SPR_58_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/contribute/index.html
@Component({
  templateUrl: '../../src/app/support/contribute/index.html'
})
export class SPR_59_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/index.html
@Component({
  templateUrl: '../../src/app/support/index.html'
})
export class SPR_60_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/troubleshoot/index.html
@Component({
  templateUrl: '../../src/app/support/troubleshoot/index.html'
})
export class SPR_61_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/support/why-stache/index.html
@Component({
  templateUrl: '../../src/app/support/why-stache/index.html'
})
export class SPR_62_IndexComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

@Component({ template: '<router-outlet></router-outlet>' }) export class RootComponent {}

@Component({ template: '<sky-error errorType="notfound"></sky-error>' }) export class NotFoundComponent { }

// Routes need to be defined after their corresponding components
const appRoutingProviders: any[] = [];
const routes: Routes = [
{
    path: '',
    component: RootComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: [{
    path: 'content/action-buttons',
    component: SPR_0_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/affix-top',
    component: SPR_1_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/alerts',
    component: SPR_2_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/blockquote',
    component: SPR_3_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/buttons',
    component: SPR_4_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/cards',
    component: SPR_5_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/clipboard',
    component: SPR_6_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/code-block',
    component: SPR_7_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/code',
    component: SPR_8_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/config-data',
    component: SPR_9_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/edit-button',
    component: SPR_10_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/footer',
    component: SPR_11_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/grid',
    component: SPR_12_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/hero',
    component: SPR_13_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/image',
    component: SPR_14_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/include',
    component: SPR_15_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content',
    component: SPR_16_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/labels',
    component: SPR_17_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/layouts',
    component: SPR_18_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/link',
    component: SPR_19_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/markdown',
    component: SPR_20_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/navigation',
    component: SPR_21_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/page-anchor',
    component: SPR_22_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/page-summary',
    component: SPR_23_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/repeater',
    component: SPR_24_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/search',
    component: SPR_25_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/table-of-contents',
    component: SPR_26_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/tabs',
    component: SPR_27_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/text-expand',
    component: SPR_28_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/tutorial',
    component: SPR_29_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/video',
    component: SPR_30_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'content/wrapper',
    component: SPR_31_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: '',
    component: SPR_32_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'learn/basics',
    component: SPR_33_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'learn/get-started/add-stache',
    component: SPR_34_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'learn/get-started/clone-install',
    component: SPR_35_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'learn/get-started',
    component: SPR_36_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'learn/get-started/new-stache',
    component: SPR_37_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'learn',
    component: SPR_38_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'learn/migrate',
    component: SPR_39_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'learn/plugins/email-whitelist',
    component: SPR_40_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'learn/plugins',
    component: SPR_41_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'learn/plugins/stache',
    component: SPR_42_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'learn/update-stache',
    component: SPR_43_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2017/2017-05',
    component: SPR_44_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2017/2017-06',
    component: SPR_45_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2017/2017-07',
    component: SPR_46_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2017/2017-08',
    component: SPR_47_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2017/2017-09',
    component: SPR_48_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2017/2017-10',
    component: SPR_49_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2017/2017-11',
    component: SPR_50_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2017',
    component: SPR_51_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2018-01',
    component: SPR_52_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2018-03',
    component: SPR_53_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2018-04',
    component: SPR_54_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2018-05',
    component: SPR_55_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog/2018-06',
    component: SPR_56_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/changelog',
    component: SPR_57_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/contribute/developer',
    component: SPR_58_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/contribute',
    component: SPR_59_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support',
    component: SPR_60_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/troubleshoot',
    component: SPR_61_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'support/why-stache',
    component: SPR_62_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  }]
  },
{
    path: '**',
    component: NotFoundComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  }
];
const routing = RouterModule.forRoot(routes, { useHash: false });

import { enableProdMode } from '@angular/core';
enableProdMode();

@NgModule({
  declarations: [
    StacheDemoContentComponent,
    SkyDefinitionListDemoComponent,
    SPR_0_IndexComponent,
    SPR_1_IndexComponent,
    SPR_2_IndexComponent,
    SPR_3_IndexComponent,
    SPR_4_IndexComponent,
    SPR_5_IndexComponent,
    SPR_6_IndexComponent,
    SPR_7_IndexComponent,
    SPR_8_IndexComponent,
    SPR_9_IndexComponent,
    SPR_10_IndexComponent,
    SPR_11_IndexComponent,
    SPR_12_IndexComponent,
    SPR_13_IndexComponent,
    SPR_14_IndexComponent,
    SPR_15_IndexComponent,
    SPR_16_IndexComponent,
    SPR_17_IndexComponent,
    SPR_18_IndexComponent,
    SPR_19_IndexComponent,
    SPR_20_IndexComponent,
    SPR_21_IndexComponent,
    SPR_22_IndexComponent,
    SPR_23_IndexComponent,
    SPR_24_IndexComponent,
    SPR_25_IndexComponent,
    SPR_26_IndexComponent,
    SPR_27_IndexComponent,
    SPR_28_IndexComponent,
    SPR_29_IndexComponent,
    SPR_30_IndexComponent,
    SPR_31_IndexComponent,
    SPR_32_IndexComponent,
    SPR_33_IndexComponent,
    SPR_34_IndexComponent,
    SPR_35_IndexComponent,
    SPR_36_IndexComponent,
    SPR_37_IndexComponent,
    SPR_38_IndexComponent,
    SPR_39_IndexComponent,
    SPR_40_IndexComponent,
    SPR_41_IndexComponent,
    SPR_42_IndexComponent,
    SPR_43_IndexComponent,
    SPR_44_IndexComponent,
    SPR_45_IndexComponent,
    SPR_46_IndexComponent,
    SPR_47_IndexComponent,
    SPR_48_IndexComponent,
    SPR_49_IndexComponent,
    SPR_50_IndexComponent,
    SPR_51_IndexComponent,
    SPR_52_IndexComponent,
    SPR_53_IndexComponent,
    SPR_54_IndexComponent,
    SPR_55_IndexComponent,
    SPR_56_IndexComponent,
    SPR_57_IndexComponent,
    SPR_58_IndexComponent,
    SPR_59_IndexComponent,
    SPR_60_IndexComponent,
    SPR_61_IndexComponent,
    SPR_62_IndexComponent,
    RootComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SkyModule,
    AppExtrasModule,
    SkyAppRuntimeModule,
    routing
  ],
  exports: [
    StacheDemoContentComponent,
    SkyDefinitionListDemoComponent,
    SPR_0_IndexComponent,
    SPR_1_IndexComponent,
    SPR_2_IndexComponent,
    SPR_3_IndexComponent,
    SPR_4_IndexComponent,
    SPR_5_IndexComponent,
    SPR_6_IndexComponent,
    SPR_7_IndexComponent,
    SPR_8_IndexComponent,
    SPR_9_IndexComponent,
    SPR_10_IndexComponent,
    SPR_11_IndexComponent,
    SPR_12_IndexComponent,
    SPR_13_IndexComponent,
    SPR_14_IndexComponent,
    SPR_15_IndexComponent,
    SPR_16_IndexComponent,
    SPR_17_IndexComponent,
    SPR_18_IndexComponent,
    SPR_19_IndexComponent,
    SPR_20_IndexComponent,
    SPR_21_IndexComponent,
    SPR_22_IndexComponent,
    SPR_23_IndexComponent,
    SPR_24_IndexComponent,
    SPR_25_IndexComponent,
    SPR_26_IndexComponent,
    SPR_27_IndexComponent,
    SPR_28_IndexComponent,
    SPR_29_IndexComponent,
    SPR_30_IndexComponent,
    SPR_31_IndexComponent,
    SPR_32_IndexComponent,
    SPR_33_IndexComponent,
    SPR_34_IndexComponent,
    SPR_35_IndexComponent,
    SPR_36_IndexComponent,
    SPR_37_IndexComponent,
    SPR_38_IndexComponent,
    SPR_39_IndexComponent,
    SPR_40_IndexComponent,
    SPR_41_IndexComponent,
    SPR_42_IndexComponent,
    SPR_43_IndexComponent,
    SPR_44_IndexComponent,
    SPR_45_IndexComponent,
    SPR_46_IndexComponent,
    SPR_47_IndexComponent,
    SPR_48_IndexComponent,
    SPR_49_IndexComponent,
    SPR_50_IndexComponent,
    SPR_51_IndexComponent,
    SPR_52_IndexComponent,
    SPR_53_IndexComponent,
    SPR_54_IndexComponent,
    SPR_55_IndexComponent,
    SPR_56_IndexComponent,
    SPR_57_IndexComponent,
    SPR_58_IndexComponent,
    SPR_59_IndexComponent,
    SPR_60_IndexComponent,
    SPR_61_IndexComponent,
    SPR_62_IndexComponent,
    RootComponent,
    NotFoundComponent,
    SkyAppRuntimeModule
  ],
  providers: [
    SkyAppWindowRef,
    SkyAppStyleLoader,
    {
      provide: SkyAppConfig,
      deps: [
        SkyAppWindowRef
      ],
      useFactory: SkyAppConfigFactory
    },
    {
      provide: SkyAppAssetsService,
      useClass: SkyAppAssetsImplService
    },
    SkyAppViewportService,
    SkyAuthTokenProvider,
    appRoutingProviders
  ]
}) export class SkyPagesModule { }