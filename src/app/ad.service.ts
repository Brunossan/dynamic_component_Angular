import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';
import { ProfileModel } from './profile-model';
import { JobModel } from './job-model';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(
        HeroProfileComponent,
        new ProfileModel('Bombasto', 'Brave as they come', 'a')
      ),
      new AdItem(
        HeroProfileComponent,
        new ProfileModel('Dr IQ', 'Smart as they come', 'abc')
      ),
      new AdItem(
        HeroJobAdComponent,
        new JobModel(
          'Hiring for several positions',
          'Submit your resume today!',
          'ok'
        )
      ),
      new AdItem(
        HeroJobAdComponent,
        new JobModel('Openings in all departments', 'Apply today', 'y')
      ),
    ];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
