import { Injectable } from '@angular/core';

import { StacheDemoComponent } from './demo-component';

@Injectable()
export class StacheDemoComponentService {
  private components: StacheDemoComponent[] = [
    {
      name: 'Stache Wrapper',
      route: '/components/wrapper',
      icon: 'gift',
      summary: 'Provides a container for all Stache components.'
    },
  //   {
  //     name: 'Layout',
  //     route: '/components/layout',
  //     icon: 'map-o',
  //     summary: 'Basic page layouts using Stache and skyux pattern, for quick page layouts.',
  //     getCodeFiles: () => {
  //       return [
  //         {
  //           name: 'layout-demo.component.html',
  //           fileContents: require('!!raw-loader!./layout/layout-demo.component.html'),
  //           language: 'markup'
  //         },
  //         {
  //           name: 'layout-demo.component.ts',
  //           fileContents: require('!!raw-loader!./layout/layout-demo.component.ts'),
  //           language: 'typescript'
  //         }
  //       ];
  //     }
  //   },
  //   {
  //     name: 'Layout: Sidebar',
  //     route: '/components/layout-sidebar',
  //     icon: 'columns',
  //     summary: 'Side bar navigation layout pattern for creating quick documentation.',
  //     getCodeFiles: () => {
  //       return [
  //         {
  //           name: 'layout-sidebar-demo.component.html',
  //           fileContents:
  //             require('!!raw-loader!./layout-sidebar/layout-sidebar-demo.component.html'),
  //           language: 'markup'
  //         },
  //         {
  //           name: 'layout-sidebar-demo.component.ts',
  //           fileContents: require('!!raw-loader!./layout-sidebar/layout-sidebar-demo.component.ts'),
  //           language: 'typescript'
  //         }
  //       ];
  //     }
  //   },
  //   {
  //     name: 'Page Header',
  //     route: '/components/page-header',
  //     icon: 'header',
  //     summary: `This is the Page Header component.`,
  //     getCodeFiles: () => {
  //       return [
  //         {
  //           name: 'page-header-demo.component.html',
  //           fileContents: require('!!raw-loader!./page-header/page-header-demo.component.html'),
  //           language: 'markup'
  //         },
  //         {
  //           name: 'page-header-demo.component.ts',
  //           fileContents: require('!!raw-loader!./page-header/page-header-demo.component.ts'),
  //           language: 'typescript'
  //         }
  //       ];
  //     }
  //   },
    {
      name: 'Page Summary',
      route: '/components/page-summary',
      icon: 'file-text',
      summary: 'Provides a formatted section at the top of the page for summary content.'
    },
    {
      name: 'Page Anchor',
      route: '/components/page-anchor',
      icon: 'link',
      summary: 'Provides a section anchor for inter page navigation.'
    },
  //   {
  //     name: 'Table of Contents',
  //     route: '/components/table-of-contents',
  //     icon: 'list-ol',
  //     summary: 'list of page items',
  //     getCodeFiles: () => {
  //       return [
  //         {
  //           name: 'table-of-contents-demo.component.html',
  //           fileContents:
  //             require('!!raw-loader!./table-of-contents/table-of-contents-demo.component.html'),
  //           language: 'markup'
  //         },
  //         {
  //           name: 'table-of-contents-demo.component.ts',
  //           fileContents:
  //             require('!!raw-loader!./table-of-contents/table-of-contents-demo.component.ts'),
  //           language: 'typescript'
  //         }
  //       ];
  //     }
  //   },
  //   {
  //     name: 'Sidebar',
  //     route: '/components/sidebar',
  //     icon: 'columns',
  //     summary: '',
  //     getCodeFiles: () => {
  //       return [
  //         {
  //           name: 'sidebar-demo.component.html',
  //           fileContents: require('!!raw-loader!./sidebar/sidebar-demo.component.html'),
  //           language: 'markup'
  //         },
  //         {
  //           name: 'sidebar-demo.component.ts',
  //           fileContents: require('!!raw-loader!./sidebar/sidebar-demo.component.ts'),
  //           language: 'typescript'
  //         }
  //       ];
  //     }
  //   },
    {
      name: 'Action Buttons',
      route: '/components/action-buttons',
      icon: 'th-list',
      summary: 'Provides a clean, visual navigation pattern for linking to multiple documents using the SKY UX Action Button.'
    },
    {
      name: 'Grid',
      route: '/components/grid',
      icon: 'table',
      summary: 'Provides a layout grid for creating responsive content.'
    },
    {
      name: 'Code Block',
      route: '/components/code-block',
      icon: 'code',
      summary: 'Provides a formatted block of code with syntax highlighting.'
    },
    {
      name: 'Code',
      route: '/components/code',
      icon: 'code',
      summary: 'Provides a formatted in line snippet of code.'
    }
  //   {
  //     name: 'Breadcrumbs',
  //     route: '/components/breadcrumbs',
  //     icon: 'exchange',
  //     summary: `The breadcrumbs component displays a menu at the top of the page to
  //       help users keep track of their location within the app.`
  //   }
  ];

  public getAll(): StacheDemoComponent[] {
    return this.components;
  }

  public getAllSorted(): StacheDemoComponent[] {
    return this.components.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
          return 1;
      }
      return 0;
    });
  }

  public getByName(name: string): StacheDemoComponent {
    return this.components.filter(component => component.name === name)[0];
  }
}
