import { Component, OnInit, Input } from '@angular/core';

import {
  SkyAppWindowRef
} from '@skyux/core';

@Component({
  selector: 'stache-redirect',
  templateUrl: './redirect.component.html'
})
export class StacheRedirectComponent implements OnInit {
  @Input()
  public url: string;
  constructor(private windowRef: SkyAppWindowRef) {}
  public ngOnInit() {
    this.windowRef.nativeWindow.location.replace(this.url);
  }
}
