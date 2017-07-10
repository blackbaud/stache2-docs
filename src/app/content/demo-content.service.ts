import { Injectable } from '@angular/core';

import { StacheDemoContent } from './demo-content';

@Injectable()
export class StacheDemoContentService {
  [index: string]: any;
  public components: StacheDemoContent[] = [
    {
      name: 'Stache wrapper',
      route: '/content/wrapper',
      icon: 'gift',
      summary: 'Provides a container for all Stache components.'
    },
    {
      name: 'Page summary',
      route: '/content/page-summary',
      icon: 'file-text',
      summary: 'Provides a formatted section at the top of the page for summary content.'
    },
    {
      name: 'Page anchor',
      route: '/content/page-anchor',
      icon: 'link',
      summary: 'Provides a section anchor for inter page navigation.'
    },
    {
      name: 'Action buttons',
      route: '/content/action-buttons',
      icon: 'th-list',
      summary: 'Provides a clean, visual navigation pattern for linking \
      to multiple documents using the SKY UX Action Button.'
    },
    {
      name: 'Grid',
      route: '/content/grid',
      icon: 'table',
      summary: 'Provides a layout grid for creating responsive content.'
    },
    {
      name: 'Code block',
      route: '/content/code-block',
      icon: 'code',
      summary: 'Provides a formatted block of code with syntax highlighting.'
    },
    {
      name: 'Code',
      route: '/content/code',
      icon: 'code',
      summary: 'Provides a formatted in line snippet of code.'
    },
    {
      name: 'Hero',
      route: '/content/hero',
      icon: 'photo',
      summary: 'Provides a Hero with a background image, title, and subheading \
      information to your Stache page.'
    },
    {
      name: 'Image',
      route: '/content/image',
      icon: 'photo',
      summary: 'Provides a responsive image container.'
    },
    {
      name: 'Tutorial',
      route: '/content/tutorial',
      icon: 'book',
      summary: 'Provides a formatted and styled tutorial pattern.'
    },
    {
      name: 'Video',
      route: '/content/video',
      icon: 'video-camera',
      summary: 'Provides a responsive container for video embeds.'
    },
    {
      name: 'Include',
      route: '/content/include',
      icon: 'photo',
      summary: 'Provides a mechanism for single sourcing static content.'
    }
  ];

  public getAllSortedByCollection(collection: string): StacheDemoContent[] {
    return this[collection].sort((a: StacheDemoContent, b: StacheDemoContent) => {
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

  public getByName(name: string): StacheDemoContent {
    return this.components.filter(component => component.name === name)[0];
  }
}
