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
      name: 'Blockquote',
      route: '/content/blockquote',
      icon: 'quote-left',
      summary: 'Provides a formatted blockquote.'
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
      summary: 'Provides a formatted inline snippet of code.'
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
      summary: 'Provides a responsive container to display an image.'
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
      icon: 'recycle',
      summary: 'Provides a mechanism for single sourcing static content.'
    },
    {
      name: 'Configuration and Data',
      route: '/content/config-data',
      icon: 'database',
      summary: 'Provides a mechanism for accessing data and site configuration.'
    },
    {
      name: 'Alerts',
      route: '/content/alerts',
      icon: 'exclamation-triangle',
      summary: 'Provides a formatted SKY UX-themed alert.'
    },
    {
      name: 'Table of Contents',
      route: '/content/table-of-contents',
      icon: 'list-ol',
      summary: 'Provides a quick and effortless way to navigate content on a page.'
    },
    {
      name: 'Buttons',
      route: '/content/buttons',
      icon: 'square-o',
      summary: 'Provides a formatted SKY UX-themed button.'
    },
    {
      name: 'Cards',
      route: '/content/cards',
      icon: 'list-alt',
      summary: 'Provides a formatted SKY UX-themed container to highlight important information.'
    },
    {
      name: 'Labels',
      route: '/content/labels',
      icon: 'tag',
      summary: 'Provides a SKY UX-themed label for when you need to display important info.'
    },
    {
      name: 'Tabs',
      route: '/content/tabs',
      icon: 'file-o',
      summary: 'Provides a formatted SKY UX-themed tabset for your page.'
    },
    {
      name: 'Text Expand',
      route: '/content/text-expand',
      icon: 'font',
      summary: 'Truncates long text with an ellipsis and a link to expand the text.'
    },
    {
      name: 'Repeater',
      route: '/content/repeater',
      icon: 'bars',
      summary: 'Creates a SKY UX-themed container to display information for a list of objects.'
    },
    {
      name: 'Markdown',
      route: '/content/markdown',
      icon: 'hashtag',
      summary: 'Allows the use of Markdown in Stache 2 projects.'
    },
    {
      name: 'Affix top',
      route: '/content/affix-top',
      icon: 'wrench',
      summary: `Wraps elements and causes them to affix to the window on scroll.`
    },
    {
      name: 'Links',
      route: '/content/link',
      icon: 'link',
      summary: `Links to an internal page, a page section within a page, or an external website.`
    },
    {
      name: 'Edit Button',
      route: '/content/edit-button',
      icon: 'edit',
      summary: `Adds an edit button to each page to allow users to edit.`
    },
    {
      name: 'Search',
      route: '/content/search',
      icon: 'search',
      summary: `Enables search capabilities for site content.`
    },
    {
      name: 'Navigation',
      route: '/content/navigation',
      icon: 'chevron-circle-up',
      summary: 'Provides navigational utilities to let users move through your content.'
    },
    {
      name: 'Layouts',
      route: '/content/layouts',
      icon: 'file-o',
      summary: 'Enable consistent formatting for the content on your Stache site.'
    },
    {
      name: 'Footer',
      route: '/content/footer',
      icon: 'window-minimize',
      summary: 'Settings for including a footer in your layout.'
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
