import { Component, OnInit } from '@angular/core';

import { StacheDemoComponentService } from './demo-component.service';
import { StacheDemoComponent } from './demo-component';
import { StacheNavLink } from '../../modules/nav/nav-link';

@Component({
  selector: 'stache-demo-components',
  templateUrl: './demo-components.component.html'
})
export class StacheDemoComponentsComponent implements OnInit {
  public routes: StacheNavLink[] = [];

  public constructor(private componentService: StacheDemoComponentService) { }

  public ngOnInit(): void {
    let components = this.componentService.getAllSorted();

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
