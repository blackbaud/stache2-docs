
import {
  StacheRouteMetadataService,
  STACHE_ROUTE_METADATA_SERVICE_CONFIG
} from '@blackbaud/stache';

/* tslint:disable:quotemark whitespace max-line-length */
export const STACHE_ROUTE_METADATA_PROVIDERS: any[] = [
  {
    provide: STACHE_ROUTE_METADATA_SERVICE_CONFIG,
    useValue: [{"path":"content/action-buttons","name":"Action button","showInNav":true},{"path":"content/affix-top","name":"Affix top","showInNav":true},{"path":"content/alerts","name":"Alert","showInNav":true},{"path":"content/blockquote","name":"Blockquote","showInNav":true},{"path":"content/buttons","name":"Buttons","showInNav":true},{"path":"content/cards","name":"Cards","showInNav":true},{"path":"content/clipboard","name":"Copy to clipboard","showInNav":true},{"path":"content/code-block","name":"Code block","showInNav":true},{"path":"content/code","name":"Code","showInNav":true},{"path":"content/config-data","name":"Configuration and data","showInNav":true},{"path":"content/config-data","name":"{&#123; @buildtime:stache.jsonData.global.productNameShort }} Title","showInNav":true},{"path":"content/edit-button","name":"Edit button","showInNav":true},{"path":"content/footer","name":"Footer","showInNav":true},{"path":"content/grid","name":"Grid","showInNav":true},{"path":"content/hero","name":"Hero","showInNav":true},{"path":"content/image","name":"Image","showInNav":true},{"path":"content/include","name":"Include","showInNav":true},{"path":"content","name":"Components","showInNav":true},{"path":"content/labels","name":"Label","showInNav":true},{"path":"content/layouts","name":"Layout","showInNav":true},{"path":"content/layouts","name":"My Sample Page","order":"5","showInNav":true},{"path":"content/layouts","name":"My Sample Page","showInNav":true},{"path":"content/layouts","name":"My Sample Page","showInNav":true},{"path":"content/link","name":"Link","showInNav":true},{"path":"content/markdown","name":"Markdown","showInNav":true},{"path":"content/navigation","name":"Navigation","showInNav":true},{"path":"content/navigation","name":"My Sample Page","showInNav":true},{"path":"content/navigation","name":"My Sample Page","showInNav":true},{"path":"content/navigation","name":"My Sample Page","showInNav":true},{"path":"content/navigation","name":"My Sample Page","showInNav":true},{"path":"content/navigation","name":"Sample","showInNav":true},{"path":"content/navigation","name":"My Sample Page","order":"1","showInNav":true},{"path":"content/page-anchor","name":"Page anchor","showInNav":true},{"path":"content/page-summary","name":"Page summary","showInNav":true},{"path":"content/repeater","name":"Repeater","showInNav":true},{"path":"content/search","name":"Search","showInNav":true},{"path":"content/table-of-contents","name":"Table of contents","showInNav":true},{"path":"content/table-of-contents","name":"My Sample Page","showInNav":true},{"path":"content/tabs","name":"Tabs","showInNav":true},{"path":"content/text-expand","name":"Text expand","showInNav":true},{"path":"content/tutorial","name":"Tutorial","showInNav":true},{"path":"content/video","name":"Video","showInNav":true},{"path":"content/wrapper","name":"Wrapper","showInNav":true},{"path":"content/wrapper","name":"Wrapper","showInNav":true},{"path":"content/wrapper","name":"Wrapper","order":"5","showInNav":true},{"path":"learn/basics","name":"Basics","order":"2","showInNav":true},{"path":"learn/basics","name":"My Sample Page","showInNav":true},{"path":"learn/get-started/add-stache","name":"Add Stache","order":"4","showInNav":true},{"path":"learn/get-started/clone-install","name":"Clone and Install Stache Locally","order":"1","showInNav":true},{"path":"learn/get-started","name":"Getting Started","order":"1","showInNav":true},{"path":"learn/get-started/new-stache","name":"New Stache","order":"1","showInNav":true},{"path":"learn","name":"Learn","showInNav":true},{"path":"learn/migrate","name":"Migrate Stache","order":"2","showInNav":true},{"path":"learn/plugins/email-whitelist","name":"Email Whitelist Plugin","showInNav":true},{"path":"learn/plugins","name":"Stache Plugins","order":"5","showInNav":true},{"path":"learn/plugins/stache","name":"Stache Plugin","showInNav":true},{"path":"learn/update-stache","name":"Update Stache","order":"3","showInNav":true},{"path":"support/changelog/2017/2017-05","name":"May","order":"120","showInNav":true},{"path":"support/changelog/2017/2017-06","name":"June","order":"110","showInNav":true},{"path":"support/changelog/2017/2017-07","name":"July","order":"100","showInNav":true},{"path":"support/changelog/2017/2017-08","name":"August","order":"90","showInNav":true},{"path":"support/changelog/2017/2017-09","name":"September","order":"80","showInNav":true},{"path":"support/changelog/2017/2017-10","name":"October","order":"70","showInNav":true},{"path":"support/changelog/2017/2017-11","name":"November","order":"60","showInNav":true},{"path":"support/changelog/2017","name":"2017","order":"1000","showInNav":true},{"path":"support/changelog/2018-01","name":"January 2018","order":"120","showInNav":true},{"path":"support/changelog/2018-03","name":"March 2018","order":"100","showInNav":true},{"path":"support/changelog/2018-04","name":"April 2018","order":"90","showInNav":true},{"path":"support/changelog/2018-05","name":"May 2018","order":"80","showInNav":true},{"path":"support/changelog/2018-06","name":"June 2018","order":"70","showInNav":true},{"path":"support/changelog","name":"Changelog","showInNav":true},{"path":"support/contribute/developer","name":"Developer Reference","showInNav":true},{"path":"support/contribute","name":"Contribute","showInNav":true},{"path":"support","name":"Support","showInNav":true},{"path":"support/troubleshoot","name":"Troubleshooting","showInNav":true},{"path":"support/why-stache","name":"Why Stache?","showInNav":true}]
  },
  {
    provide: StacheRouteMetadataService,
    useClass: StacheRouteMetadataService
  }
];
/* tslint:enable:quotemark whitespace max-line-length */

import {
  StacheJsonDataService,
  STACHE_JSON_DATA_SERVICE_CONFIG
} from '@blackbaud/stache';

/* tslint:disable:quotemark whitespace max-line-length */
export const STACHE_JSON_DATA_PROVIDERS: any[] = [
  {
    provide: STACHE_JSON_DATA_SERVICE_CONFIG,
    useValue: {"actionbuttonsdemo":[{"name":"Rock","path":"/","icon":"hand-rock-o","summary":"Enter a description of what to find at the navigation item. "},{"name":"Paper","path":"/","icon":"hand-paper-o","summary":"Keep the length relatively short."},{"name":"Scissors","path":"/","icon":"hand-scissors-o","summary":"Write the description with a positive verb about what the user can do on the next page. "},{"name":"Lizard","path":"/","icon":"hand-lizard-o","summary":"Action buttons are great for top-level pages."},{"name":"Spock","path":"/","icon":"hand-spock-o","summary":"It's okay to leverage some modest humor to amuse the user."}],"getstarted":[{"name":"Create a new Stache SPA","path":"/learn/get-started/new-stache","icon":"bolt","summary":"Do you need to set up a brand new Stache SPA?"},{"name":"Blackbaud Staff create a new Stache SPA","path":"https://docs.blackbaud.com/stache-internal/new-bb-stache","icon":"bolt","summary":"Blackbaud Staff should follow the Blackbaud version for a new Stache SPA."},{"name":"Clone and set up a Stache SPA locally","path":"/learn/get-started/clone-install","icon":"clone","summary":"Did someone set up a Stache SPA for you? Learn how to clone and install locally."},{"name":"Migrate from Stache 1","path":"/learn/migrate","icon":"suitcase","summary":"Do you want to migrate your site? Learn about the steps and considerations when moving to Stache 2."},{"name":"Add Stache to existing SKY UX SPA","path":"/learn/get-started/add-stache","icon":"plus-circle","summary":"Do you already have a SKY UX SPA that you want to add Stache?"}],"gitvsts":[{"name":"Learn Git workflow","path":"https://docs.blackbaud.com/engineering-system-docs/learn/dev-setup-engsys/git-workflow","icon":"git","summary":"New to Git? Learn how to use Git process for updating your repo. The Engineering System has adopted Git as a standard version control for Azure DevOps and GitHub."},{"name":"Edit in Azure DevOps","path":"https://docs.blackbaud.com/stache-internal/Azure DevOps-editor/","icon":"pencil-square-o","summary":"Do you have a small edit? Learn how to use Azure DevOps to make your change without leaving your web browser."},{"name":"Edit Azure DevOps repo settings","path":"https://docs.blackbaud.com/stache-internal/Azure DevOps-repo-setup","icon":"shield","summary":"Azure DevOps Git Repos are set up with standard policies and security. If necessary, learn how to edit them for your Stache SPA."}],"global":{"productNameLong":"Stache","productNameShort":"Stache","demoVariable":"demo variable data","stacheVersion":"^2.6.0","skyUXVersion":"^2.11.0","builderVersion":"^1.14.0"},"startnextsteps":[{"name":"Basics","path":"/learn/basics","icon":"cutlery","summary":"Learn how Stache is organized and how to get started creating content for your site."},{"name":"Content","path":"/content","icon":"birthday-cake","summary":"After you learn the basics, review the different elements and components that can style your technical documentation."}]}
  },
  {
    provide: StacheJsonDataService,
    useClass: StacheJsonDataService
  }
];
/* tslint:enable:quotemark whitespace max-line-length */

import { Http } from '@angular/http';
import { StacheHttpService } from '@blackbaud/stache';

export const STACHE_HTTP_PROVIDERS: any[] = [{
  provide: StacheHttpService,
  useExisting: Http
}];

import { SkyAppConfig } from '@blackbaud/skyux-builder/runtime';
import { StacheConfigService } from '@blackbaud/stache';

export const STACHE_CONFIG_PROVIDERS: any[] = [{
  provide: StacheConfigService,
  useExisting: SkyAppConfig
}];
require('style-loader!./app.scss');

import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';

import { StacheDemoContentService } from './content/demo-content.service';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    StacheModule
  ],
  providers: [
      /* tslint:disable:trailing-comma */
      STACHE_ROUTE_METADATA_PROVIDERS,
      /* tslint:enable:trailing-comma */
  
      /* tslint:disable:trailing-comma */
      STACHE_JSON_DATA_PROVIDERS,
      /* tslint:enable:trailing-comma */
  
      /* tslint:disable:trailing-comma */
      STACHE_HTTP_PROVIDERS,
      /* tslint:enable:trailing-comma */
  
      /* tslint:disable:trailing-comma */
      STACHE_CONFIG_PROVIDERS,
      /* tslint:enable:trailing-comma */
  
    StacheDemoContentService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
