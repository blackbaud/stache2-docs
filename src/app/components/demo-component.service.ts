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
    },
    {
      name: 'Hero',
      route: '/components/hero',
      icon: 'photo',
      summary: 'Provides a Hero with a background image, title, and subheading information to your Stache page.'
    }
  ];

  private developmentComponents: StacheDemoComponent[] = [
    {
      name: 'Breadcrumbs',
      route: '/contribute/components/breadcrumbs',
      icon: 'exchange',
      summary: `Displays a menu at the top of the page to
        help users keep track of their location within the app.`
    },
    {
      name: 'Back To Top',
      route: '/contribute/components/back-to-top',
      icon: 'chevron-up',
      summary: `Provides a quick way to return to the top of a page.`
    },
    {
      name: 'Nav',
      route: '/contribute/components/nav',
      icon: 'compass',
      summary: `Handles navigation consistently throughout a Stache application.`
    },
    {
      name: 'Table of Contents',
      route: '/contribute/components/table-of-contents',
      icon: 'list-ol',
      summary: 'Generates the inter page navigation using stache page anchors.'
    },
    {
      name: 'Sidebar',
      route: '/contribute/components/sidebar',
      icon: 'columns',
      summary: 'Generates the side navigation for the sidebar layout.'
    },
    {
      name: 'Container',
      route: '/contribute/components/container',
      icon: 'cube',
      summary: 'Wraps content in a stache container for formatting.'
    },
    // {
    //   name: 'Layout',
    //   route: '/contribute/components/layout',
    //   icon: 'map-o',
    //   summary: 'Component interface between the stache wrapper and layouts.'
    // },
    // {
    //   name: 'Layout: Blank',
    //   route: '/contribute/components/layout-blank',
    //   icon: 'map-o',
    //   summary: 'Basic page layouts using Stache and skyux pattern, for quick page layouts.'
    // },
    // {
    //   name: 'Layout: Container',
    //   route: '/contribute/components/layout-container',
    //   icon: 'map-o',
    //   summary: 'Basic page layouts using Stache and skyux pattern, for quick page layouts.'
    // },
    // {
    //   name: 'Layout: Sidebar',
    //   route: '/contribute/components/layout-sidebar',
    //   icon: 'map-o',
    //   summary: 'Basic page layouts using Stache and skyux pattern, for quick page layouts.'
    // },
    {
      name: 'Page Header',
      route: '/contribute/components/page-header',
      icon: 'header',
      summary: `Provides a header for each Stache page.`
    },
    {
      name: 'Page Title',
      route: '/contribute/components/page-header',
      icon: 'header',
      summary: `Provides a title for each Stache page.`
    }
  ];

  public getAllDevelopmentSorted(): StacheDemoComponent[] {
    return this.developmentComponents.sort((a, b) => {
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
