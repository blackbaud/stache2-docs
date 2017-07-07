import { Component } from '@angular/core';

@Component({
  selector: 'stache-action-buttons-content',
  templateUrl: 'action-buttons-demo.content.html'
})
export class StacheActionButtonsDemoContent {
  public routes = [
    {
      name: 'Layout',
      path: '/content/layout',
      icon: 'map-o',
      summary: 'Basic page layouts using Stache and skyux pattern, for quick page layouts.'
    },
    {
      name: 'Layout: Sidebar',
      path: '/content/layout-sidebar',
      icon: 'columns',
      summary: 'Side bar navigation layout pattern for creating quick documentation.'
    }
  ];
}
