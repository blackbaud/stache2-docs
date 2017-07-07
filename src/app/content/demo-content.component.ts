import { Component, OnInit } from '@angular/core';

import { StacheDemoContentService } from './demo-content.service';

@Component({
  selector: 'stache-demo-content',
  templateUrl: './demo-content.component.html'
})
export class StacheDemoContentComponent implements OnInit {
  public routes: any[] = [];

  public constructor(
    private componentService: StacheDemoContentService) { }

  public ngOnInit(): void {
    let components = this.componentService.getAllSortedByCollection('components');

    components.forEach(component => {
      this.routes.push({
        path: [component.route],
        name: component.name,
        icon: component.icon,
        summary: component.summary
      });
    });
  }
}
