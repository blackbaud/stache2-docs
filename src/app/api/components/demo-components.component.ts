import { Component, OnInit } from '@angular/core';

import { StacheDemoComponentService } from './demo-component.service';

@Component({
  selector: 'stache-demo-components',
  templateUrl: './demo-components.component.html',
  styleUrls: ['./demo-components.component.scss']
})
export class StacheDemoComponentsComponent implements OnInit {
  public routes: any[] = [];
  private components: any[];

  public constructor(
    private componentService: StacheDemoComponentService) { }

  public ngOnInit(): void {
    this.components = this.componentService
      .getAllSortedByCollection('components')
      .map(component => {
        return {
          path: [component.route],
          name: component.name,
          icon: component.icon,
          summary: component.summary
        };
    });

    this.routes = this.components;
  }

  public searchApplied(searchText: string) {
    let filteredItems = this.components;
    if (searchText) {
      filteredItems = this.components.filter(function (item: any){
        let property: any;
        for (property in item) {
          if (item.hasOwnProperty(property) && (property === 'name' || property === 'summary')) {
            if (item[property].toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
              return true;
            }
          }
        }
        return false;
      });
    }
    this.routes = filteredItems;
  }
}
