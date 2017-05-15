import { Component, OnInit } from '@angular/core';

import { StacheDemoComponentService } from '../../components/demo-component.service';

@Component({
  selector: 'stache-contribute-components',
  templateUrl: './contribute-components.component.html'
})
export class StacheContributeComponentsComponent implements OnInit {
  public routes: any[] = [];

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
