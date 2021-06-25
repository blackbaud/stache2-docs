import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-directory',
  templateUrl: './demo-content.component.html'
})

export class StacheComponent implements OnInit {

  public components = [
    {
      name: 'Stache wrapper',
      path: '/components/wrapper',
      icon: 'gift',
      summary: 'Provides a container for all Stache components.'
    },
    {
      name: 'Page summary',
      path: '/components/page-summary',
      icon: 'file-text',
      summary: 'Provides a formatted section for summary content at the top of the page.'
    },
    {
      name: 'Page anchor',
      path: '/components/page-anchor',
      icon: 'link',
      summary: 'Provides a section anchor for inter-page navigation.'
    },
    {
      name: 'Action button',
      path: '/components/action-buttons',
      icon: 'th-list',
      summary: 'Provides a clean, visual pattern to navigate content with SKY UX action buttons.'
    },
    {
      name: 'Blockquote',
      path: '/components/blockquote',
      icon: 'quote-left',
      summary: 'Provides a formatted blockquote.'
    },
    {
      name: 'Grid',
      path: '/components/grid',
      icon: 'table',
      summary: 'Provides a layout grid to create responsive content.'
    },
    {
      name: 'Code block',
      path: '/components/code-block',
      icon: 'code',
      summary: 'Provides a formatted block of code with syntax highlighting.'
    },
    {
      name: 'Code',
      path: '/components/code',
      icon: 'code',
      summary: 'Provides a formatted inline snippet of code.'
    },
    {
      name: 'Copy to clipboard',
      path: '/components/clipboard',
      icon: 'clipboard',
      summary: 'Provides the ability to copy sections of content to the clipboard.'
    },
    {
      name: 'Hero',
      path: '/components/hero',
      icon: 'photo',
      summary: 'Adds a hero with a background image, title, and subheading to your Stache page.'
    },
    {
      name: 'Image',
      path: '/components/image',
      icon: 'photo',
      summary: 'Provides a responsive container to display an image.'
    },
    {
      name: 'Tutorial',
      path: '/components/tutorial',
      icon: 'book',
      summary: 'Provides a formatted and styled tutorial pattern.'
    },
    {
      name: 'Video',
      path: '/components/video',
      icon: 'video-camera',
      summary: 'Provides a responsive container to embed video.'
    },
    {
      name: 'Include',
      path: '/components/include',
      icon: 'recycle',
      summary: 'Provides a mechanism for single-sourcing static content.'
    },
    {
      name: 'Configuration and data',
      path: '/components/config-data',
      icon: 'database',
      summary: 'Provides a mechanism to access data and site configuration.'
    },
    {
      name: 'Alert',
      path: '/components/alerts',
      icon: 'exclamation-triangle',
      summary: 'Provides a SKY UX-themed alert.'
    },
    {
      name: 'Table of contents',
      path: '/components/table-of-contents',
      icon: 'list-ol',
      summary: 'Provides a quick and easy way to navigate content on a page.'
    },
    {
      name: 'Button',
      path: '/components/buttons',
      icon: 'square-o',
      summary: 'Creates a SKY UX-themed button to trigger an action.'
    },
    {
      name: 'Card',
      path: '/components/cards',
      icon: 'list-alt',
      summary: 'Provides a SKY UX-themed container to highlight important information.'
    },
    {
      name: 'Label',
      path: '/components/labels',
      icon: 'tag',
      summary: 'Provides a SKY UX-themed label to call out important information.'
    },
    {
      name: 'Tabs',
      path: '/components/tabs',
      icon: 'file-o',
      summary: 'Provides a SKY UX-themed tabset for your page.'
    },
    {
      name: 'Text expand',
      path: '/components/text-expand',
      icon: 'font',
      summary: 'Truncates long text with an ellipsis and a link to expand the text.'
    },
    {
      name: 'Repeater',
      path: '/components/repeater',
      icon: 'bars',
      summary: 'Creates a SKY UX-themed container to display information for a list of objects.'
    },
    {
      name: 'Markdown',
      path: '/components/markdown',
      icon: 'hashtag',
      summary: 'Allows the use of Markdown in Stache projects.'
    },
    {
      name: 'Affix top',
      path: '/components/affix-top',
      icon: 'wrench',
      summary: `Wraps elements and causes them to affix to the window on scroll.`
    },
    {
      name: 'Link',
      path: '/components/link',
      icon: 'link',
      summary: `Links to an internal page, a page section within a page, or an external website.`
    },
    {
      name: 'Edit button',
      path: '/components/edit-button',
      icon: 'edit',
      summary: `Adds an edit button to each page to allow users to contribute content.`
    },
    {
      name: 'Navigation',
      path: '/components/navigation',
      icon: 'chevron-circle-up',
      summary: 'Provides navigational utilities to let users move through your content.'
    },
    {
      name: 'Layout',
      path: '/components/layouts',
      icon: 'file-o',
      summary: 'Enables consistent formatting for the content on your Stache site.'
    },
    {
      name: 'Footer',
      path: '/components/footer',
      icon: 'window-minimize',
      summary: 'Specifies settings for a footer in your layout.'
    },
    {
      name: 'Search',
      path: '/components/search',
      icon: 'search',
      summary: 'Enables search capabilities for Stache. For Blackbaud use only.'
    },
    {
      name: 'Restricted view',
      path: '/components/restricted-view',
      icon: 'key',
      summary: 'Hides content from non-Blackbaud users. For Blackbaud use only.'
    }
  ];

  public ngOnInit() {
    this.components.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  }
}
