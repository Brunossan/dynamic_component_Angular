import { Component, Input, OnInit } from '@angular/core';

import { AdComponent } from './ad.component';
import { AdService } from './ad.service';
import { JobModel } from './job-model';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>
      {{data.body}}
      <h1>{{data.test}}</h1>
    </div>
  `,
})
export class HeroJobAdComponent implements AdComponent, OnInit {
  @Input() data!: JobModel;

  ngOnInit(): void {
    //this.data.test += 'z';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
