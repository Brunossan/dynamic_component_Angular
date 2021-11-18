import { ParentModel } from './parent-model';

export class ProfileModel extends ParentModel {
  public bio: string = '';
  public name: string = '';

  constructor(bio:string, name:string, input: string) {
    super(input);
    this.name = name;
    this.bio = bio;
  }
}
