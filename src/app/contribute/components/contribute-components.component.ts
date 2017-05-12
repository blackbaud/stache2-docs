import { Component, OnInit } from '@angular/core';

import { StacheDemoComponentService } from '../../components/demo-component.service';
import { StacheDemoComponent } from '../../components/demo-component';
import { StacheNavLink } from '../../../modules/nav/nav-link';

@Component({
  selector: 'stache-contribute-components',
  templateUrl: './contribute-components.component.html'
})
export class StacheContributeComponentsComponent implements OnInit {
  public routes: StacheNavLink[] = [];

  public constructor(
    private componentService: StacheDemoComponentService) { }

  public ngOnInit(): void {
    let components = this.componentService.getAllDevelopmentSorted();

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
