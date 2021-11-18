import { Type } from '@angular/core';
import { AdComponent } from './ad.component';
import { ParentModel } from './parent-model';

export class AdItem {
  constructor(public component: Type<AdComponent>, public data: ParentModel) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
