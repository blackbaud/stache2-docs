import { Component } from '@angular/core';

@Component({
  selector: 'stache-action-buttons-demo',
  templateUrl: 'action-buttons-demo.component.html'
})
export class StacheActionButtonsDemoComponent {
  public routes = [
    {
      name: 'Layout',
      path: '/components/layout',
      icon: 'map-o',
      summary: 'Basic page layouts using Stache and skyux pattern, for quick page layouts.'
    },
    {
      name: 'Layout: Sidebar',
      path: '/components/layout-sidebar',
      icon: 'columns',
      summary: 'Side bar navigation layout pattern for creating quick documentation.'
    }
  ];
}
