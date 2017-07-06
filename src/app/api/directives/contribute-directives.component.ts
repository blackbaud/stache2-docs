import { Component, OnInit } from '@angular/core';

import { StacheDemoComponentService } from '../components/demo-component.service';

@Component({
  selector: 'stache-contribute-directives',
  templateUrl: './contribute-directives.component.html'
})
export class StacheContributeDirectivesComponent implements OnInit {
  public routes: any[] = [];

  public constructor(
    private componentService: StacheDemoComponentService) { }

  public ngOnInit(): void {
    let directives = this.componentService.getAllSortedByCollection('directives');

    directives.forEach(component => {
      this.routes.push({
        path: [component.route],
        name: component.name,
        icon: component.icon,
        summary: component.summary
      });
    });
  }
}
