import { ParentModel } from './parent-model';

export class JobModel extends ParentModel {
  public body: string = '';
  public headline: string = '';

  constructor(body: string, headline: string, input: string) {
    super(input);

    this.body = body;
    this.headline = headline;
  }
}
