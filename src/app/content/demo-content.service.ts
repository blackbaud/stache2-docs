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
      summary: 'Provides a formatted section for summary content at the top of the page.'
    },
    {
      name: 'Page anchor',
      route: '/content/page-anchor',
      icon: 'link',
      summary: 'Provides a section anchor for inter-page navigation.'
    },
    {
      name: 'Action button',
      route: '/content/action-buttons',
      icon: 'th-list',
      summary: 'Provides a clean, visual pattern to navigate content with SKY UX action buttons.'
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
      summary: 'Provides a layout grid to create responsive content.'
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
      name: 'Copy to clipboard',
      route: '/content/clipboard',
      icon: 'clipboard',
      summary: 'Provides the ability to copy sections of content to the clipboard.'
    },
    {
      name: 'Hero',
      route: '/content/hero',
      icon: 'photo',
      summary: 'Adds a hero with a background image, title, and subheading to your Stache page.'
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
      summary: 'Provides a responsive container to embed video.'
    },
    {
      name: 'Include',
      route: '/content/include',
      icon: 'recycle',
      summary: 'Provides a mechanism for single-sourcing static content.'
    },
    {
      name: 'Configuration and data',
      route: '/content/config-data',
      icon: 'database',
      summary: 'Provides a mechanism to access data and site configuration.'
    },
    {
      name: 'Alert',
      route: '/content/alerts',
      icon: 'exclamation-triangle',
      summary: 'Provides a SKY UX-themed alert.'
    },
    {
      name: 'Table of contents',
      route: '/content/table-of-contents',
      icon: 'list-ol',
      summary: 'Provides a quick and easy way to navigate content on a page.'
    },
    {
      name: 'Button',
      route: '/content/buttons',
      icon: 'square-o',
      summary: 'Creates a SKY UX-themed button to trigger an action.'
    },
    {
      name: 'Card',
      route: '/content/cards',
      icon: 'list-alt',
      summary: 'Provides a SKY UX-themed container to highlight important information.'
    },
    {
      name: 'Label',
      route: '/content/labels',
      icon: 'tag',
      summary: 'Provides a SKY UX-themed label to call out important information.'
    },
    {
      name: 'Tabs',
      route: '/content/tabs',
      icon: 'file-o',
      summary: 'Provides a SKY UX-themed tabset for your page.'
    },
    {
      name: 'Text expand',
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
      summary: 'Allows the use of Markdown in Stache projects.'
    },
    {
      name: 'Affix top',
      route: '/content/affix-top',
      icon: 'wrench',
      summary: `Wraps elements and causes them to affix to the window on scroll.`
    },
    {
      name: 'Link',
      route: '/content/link',
      icon: 'link',
      summary: `Links to an internal page, a page section within a page, or an external website.`
    },
    {
      name: 'Edit button',
      route: '/content/edit-button',
      icon: 'edit',
      summary: `Adds an edit button to each page to allow users to contribute content.`
    },
    {
      name: 'Search',
      route: '/content/search',
      icon: 'search',
      summary: `Enables search capabilities for Blackbaud Stache sites.`
    },
    {
      name: 'Navigation',
      route: '/content/navigation',
      icon: 'chevron-circle-up',
      summary: 'Provides navigational utilities to let users move through your content.'
    },
    {
      name: 'Layout',
      route: '/content/layouts',
      icon: 'file-o',
      summary: 'Enables consistent formatting for the content on your Stache site.'
    },
    {
      name: 'Footer',
      route: '/content/footer',
      icon: 'window-minimize',
      summary: 'Specifies settings for a footer in your layout.'
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
