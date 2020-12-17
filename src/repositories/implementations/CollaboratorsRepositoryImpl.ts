import { CountByOccupation } from "../../dto/CountByOccupation";
import { Collaborator, Occupation } from "../../entities/Collaborator";
import { sortCollaboratorsByOccupation } from "../../utils/sortCollaboratorsByOccupation";
import { sortCollaboratorsWithOccupationAsTiebrakerCriteria } from "../../utils/sortCollaboratorsWithOccupationAsTiebrakerCriteria";
import { CollaboratorsRepository } from "../interfaces/CollaboratorsRepository";

export class CollaboratorsRepositoryImpl implements CollaboratorsRepository {
  private readonly collaborators: Collaborator[] = [
    { name: "Juca", age: 25, occupation: Occupation.FRONT_END },
    { name: "Márcia", age: 23, occupation: Occupation.BACK_END },
    { name: "Vitória", age: 28, occupation: Occupation.DESIGNER },
    { name: "Fernando", age: 19, occupation: Occupation.INTERN },
    { name: "Fabiane", age: 25, occupation: Occupation.BACK_END },
    { name: "Jéssica", age: 23, occupation: Occupation.FRONT_END },
  ];

  public getCollaboratorsAgeSum(): number {
    return this.collaborators
      .map((collaborator) => collaborator.age)
      .reduce((sum, currentAge) => sum + currentAge);
  }

  public getCollaboratorsCountByOccupation(): CountByOccupation {
    return this.collaborators
      .map((collaborator) => collaborator.occupation)
      .reduce((countByOccupation, currentOcupation) => {
        if (currentOcupation in countByOccupation) {
          countByOccupation[currentOcupation]++;
        } else {
          countByOccupation[currentOcupation] = 1;
        }
        return countByOccupation;
      }, new CountByOccupation());
  }

  public getCollaboratorsOrderedByAgeInAscending(): Collaborator[] {
    return this.collaborators.sort((a, b) => a.age - b.age);
  }

  public getCollaboratorsOrderedByAgeInDescending(): Collaborator[] {
    return this.collaborators.sort((a, b) => b.age - a.age);
  }

  public getCollaboratorsOrderedByOccupation(): Collaborator[] {
    return this.collaborators.sort((a, b) =>
      sortCollaboratorsByOccupation(a, b)
    );
  }

  public getCollaboratorsOrderedByAgeWithOccupationAsTiebrakerCriteria(): Collaborator[] {
    return this.collaborators.sort((a, b) =>
      sortCollaboratorsWithOccupationAsTiebrakerCriteria(a, b)
    );
  }
}
