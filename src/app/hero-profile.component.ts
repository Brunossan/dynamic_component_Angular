import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';
import { ProfileModel } from './profile-model';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Hire this hero today!</strong><br>
      testing my thing: {{data.test}}
    </div>
  `,
})
export class HeroProfileComponent implements AdComponent {
  @Input() data!: ProfileModel;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
