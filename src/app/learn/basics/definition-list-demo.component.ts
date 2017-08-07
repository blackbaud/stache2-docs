import { Component } from '@angular/core';

@Component({
  selector: 'basics-definition-list',
  templateUrl: './definition-list-demo.component.html'
})
export class SkyDefinitionListDemoComponent {
  public basics: {label: string, value?: string}[] = [
    {
      label: 'src',
      value: 'A majority of your documentation work will take place within this folder.'
    },
    {
      label: 'app',
      value: 'Contains your site content pages, custom SCSS (CSS), and navigation.'
    },
    {
      label: 'content folders',
      value: 'The majority of your website content is here with one index.html file per folder.'
    },
    {
      label: 'app.scss',
      value: 'You add your own custom styles here. You can include CSS content in a SCSS file.'
    },
    {
      label: 'shared',
      value: 'Contains your app navigation and any shared components you create.'
    },
    {
      label: 'app-nav',
      value: 'Add your navigation items to the app-nav.component.html file.'
    },
    {
      label: 'assets',
      value: 'Use this folder for reference files, including images and documents.'
    },
    {
      label: 'stache',
      value: 'This folder contains files for Stache features.'
    },
    {
      label: 'data',
      value: 'This is a place to include JSON data that you can use in your application.'
    },
    {
      label: 'global.json',
      value: 'This is where you set global data variables, like your application title.'
    },
    {
      label: 'includes',
      value: 'Enables you to create snippets of content that you can use in multiple places.'
    }
  ];

}
