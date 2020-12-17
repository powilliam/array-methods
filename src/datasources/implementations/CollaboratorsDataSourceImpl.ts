import { Collaborator, Occupation } from "../../entities/Collaborator";
import { CollaboratorsDataSource } from "../interfaces/CollaboratorsDataSource";

export class CollaboratorsDataSourceImpl implements CollaboratorsDataSource {
  public getCollaborators(): Collaborator[] {
    return [
      { name: "Juca", age: 25, occupation: Occupation.FRONT_END },
      { name: "Márcia", age: 23, occupation: Occupation.BACK_END },
      { name: "Vitória", age: 28, occupation: Occupation.DESIGNER },
      { name: "Fernando", age: 19, occupation: Occupation.INTERN },
      { name: "Fabiane", age: 25, occupation: Occupation.BACK_END },
      { name: "Jéssica", age: 23, occupation: Occupation.FRONT_END },
    ];
  }
}
