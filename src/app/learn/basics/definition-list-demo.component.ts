import { Component } from '@angular/core';

@Component({
  selector: 'basics-definition-list',
  templateUrl: './definition-list-demo.component.html'
})
export class SkyDefinitionListDemoComponent {
  public basics: {label: string, value?: string}[] = [
    {
      label: 'src',
      value: 'A majority of your documentation work takes place in this folder.'
    },
    {
      label: 'app',
      value: 'This folder contains your site content pages, custom SCSS (CSS), and navigation.'
    },
    {
      label: 'content folders',
      value: 'The majority of your website content is in content folders with one index.html file per folder.'
    },
    {
      label: 'app.scss',
      value: 'This file can store custom styles. You can include CSS content in a SCSS file.'
    },
    {
      label: 'shared',
      value: 'This folder contains your app navigation and any shared components you create.'
    },
    {
      label: 'app-nav',
      // tslint:disable-next-line:max-line-length
      value: 'Add your navigation items to the app-nav.component.html file. Blackbaud staff, add your items to the omnibar in the skyuxconfig.json file.'
    },
    {
      label: 'assets',
      value: 'This folder can contain reference files, such as images and documents.'
    },
    {
      label: 'stache',
      value: 'This folder contains files for Stache features.'
    },
    {
      label: 'data',
      value: 'This folder can contain JSON data to use in your application.'
    },
    {
      label: 'global.json',
      value: 'This file is where you set global data variables, such as the application title.'
    },
    {
      label: 'includes',
      value: 'This folder can contain snippets of content for reuse in multiple places.'
    },
    {
      label: 'package.json',
      value: 'This file is where you update the versions of Stache, SKY UX, and its dependencies.'
    },
    {
      label: 'skyuxconfig.json',
      value: 'This file is where you configure Stache app settings, and where Blackbaud staff can set up the omnibar.'
    }
  ];

}
