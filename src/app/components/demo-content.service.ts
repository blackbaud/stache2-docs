import { Injectable } from '@angular/core';

import { StacheDemoContent } from './demo-content';

@Injectable()
export class StacheDemoContentService {
  [index: string]: any;
  public components: StacheDemoContent[] = [
    {
      name: 'Stache wrapper',
      route: '/components/wrapper',
      icon: 'gift',
      summary: 'Provides a container for all Stache components.'
    },
    {
      name: 'Page summary',
      route: '/components/page-summary',
      icon: 'file-text',
      summary: 'Provides a formatted section for summary content at the top of the page.'
    },
    {
      name: 'Page anchor',
      route: '/components/page-anchor',
      icon: 'link',
      summary: 'Provides a section anchor for inter-page navigation.'
    },
    {
      name: 'Action button',
      route: '/components/action-buttons',
      icon: 'th-list',
      summary: 'Provides a clean, visual pattern to navigate content with SKY UX action buttons.'
    },
    {
      name: 'Blockquote',
      route: '/components/blockquote',
      icon: 'quote-left',
      summary: 'Provides a formatted blockquote.'
    },
    {
      name: 'Grid',
      route: '/components/grid',
      icon: 'table',
      summary: 'Provides a layout grid to create responsive content.'
    },
    {
      name: 'Code block',
      route: '/components/code-block',
      icon: 'code',
      summary: 'Provides a formatted block of code with syntax highlighting.'
    },
    {
      name: 'Code',
      route: '/components/code',
      icon: 'code',
      summary: 'Provides a formatted inline snippet of code.'
    },
    {
      name: 'Copy to clipboard',
      route: '/components/clipboard',
      icon: 'clipboard',
      summary: 'Provides the ability to copy sections of content to the clipboard.'
    },
    {
      name: 'Hero',
      route: '/components/hero',
      icon: 'photo',
      summary: 'Adds a hero with a background image, title, and subheading to your Stache page.'
    },
    {
      name: 'Image',
      route: '/components/image',
      icon: 'photo',
      summary: 'Provides a responsive container to display an image.'
    },
    {
      name: 'Tutorial',
      route: '/components/tutorial',
      icon: 'book',
      summary: 'Provides a formatted and styled tutorial pattern.'
    },
    {
      name: 'Video',
      route: '/components/video',
      icon: 'video-camera',
      summary: 'Provides a responsive container to embed video.'
    },
    {
      name: 'Include',
      route: '/components/include',
      icon: 'recycle',
      summary: 'Provides a mechanism for single-sourcing static content.'
    },
    {
      name: 'Configuration and data',
      route: '/components/config-data',
      icon: 'database',
      summary: 'Provides a mechanism to access data and site configuration.'
    },
    {
      name: 'Alert',
      route: '/components/alerts',
      icon: 'exclamation-triangle',
      summary: 'Provides a SKY UX-themed alert.'
    },
    {
      name: 'Table of contents',
      route: '/components/table-of-contents',
      icon: 'list-ol',
      summary: 'Provides a quick and easy way to navigate content on a page.'
    },
    {
      name: 'Button',
      route: '/components/buttons',
      icon: 'square-o',
      summary: 'Creates a SKY UX-themed button to trigger an action.'
    },
    {
      name: 'Card',
      route: '/components/cards',
      icon: 'list-alt',
      summary: 'Provides a SKY UX-themed container to highlight important information.'
    },
    {
      name: 'Label',
      route: '/components/labels',
      icon: 'tag',
      summary: 'Provides a SKY UX-themed label to call out important information.'
    },
    {
      name: 'Tabs',
      route: '/components/tabs',
      icon: 'file-o',
      summary: 'Provides a SKY UX-themed tabset for your page.'
    },
    {
      name: 'Text expand',
      route: '/components/text-expand',
      icon: 'font',
      summary: 'Truncates long text with an ellipsis and a link to expand the text.'
    },
    {
      name: 'Repeater',
      route: '/components/repeater',
      icon: 'bars',
      summary: 'Creates a SKY UX-themed container to display information for a list of objects.'
    },
    {
      name: 'Markdown',
      route: '/components/markdown',
      icon: 'hashtag',
      summary: 'Allows the use of Markdown in Stache projects.'
    },
    {
      name: 'Affix top',
      route: '/components/affix-top',
      icon: 'wrench',
      summary: `Wraps elements and causes them to affix to the window on scroll.`
    },
    {
      name: 'Link',
      route: '/components/link',
      icon: 'link',
      summary: `Links to an internal page, a page section within a page, or an external website.`
    },
    {
      name: 'Edit button',
      route: '/components/edit-button',
      icon: 'edit',
      summary: `Adds an edit button to each page to allow users to contribute content.`
    },
    {
      name: 'Navigation',
      route: '/components/navigation',
      icon: 'chevron-circle-up',
      summary: 'Provides navigational utilities to let users move through your content.'
    },
    {
      name: 'Layout',
      route: '/components/layouts',
      icon: 'file-o',
      summary: 'Enables consistent formatting for the content on your Stache site.'
    },
    {
      name: 'Footer',
      route: '/components/footer',
      icon: 'window-minimize',
      summary: 'Specifies settings for a footer in your layout.'
    },
    {
      name: 'Search',
      route: '/components/search',
      icon: 'search',
      summary: 'Enables search capabilities for Stache. For Blackbaud use only.'
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
