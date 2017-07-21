import { Component, OnInit } from '@angular/core';

import { StacheDemoContentService } from './demo-content.service';

@Component({
  selector: 'stache-demo-content',
  templateUrl: './demo-content.component.html',
  styleUrls: ['./demo-content.component.scss']
})
export class StacheDemoContentComponent implements OnInit {
  public routes: any[] = [];
  private components: any[];

  public constructor(
    private componentService: StacheDemoContentService) { }

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
