export enum Occupation {
  FRONT_END = "front-end",
  BACK_END = "back-end",
  DESIGNER = "designer",
  INTERN = "intern",
}

export class Collaborator {
  public name!: string;
  public age!: number;
  public occupation!: Occupation;
}
