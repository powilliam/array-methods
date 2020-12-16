import { CountByOccupation } from "../../dto/CountByOccupation";
import { Collaborator, Occupation } from "../../entities/Collaborator";
import { GenerateCollaboratorsCountByOccupationReportUseCase } from "../../usecases/interfaces/GenerateCollaboratorsCountByOccupationReportUseCase";
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

  constructor(
    private readonly generateCollaboratorsCountByOccupationReportUseCase: GenerateCollaboratorsCountByOccupationReportUseCase
  ) {}

  public getCollaboratorsAgeSum(): number {
    return this.collaborators
      .map((collaborator) => collaborator.age)
      .reduce((sum, currentAge) => sum + currentAge);
  }

  public getCollaboratorsCountByOccupation(): CountByOccupation {
    return this.generateCollaboratorsCountByOccupationReportUseCase.execute(
      this.collaborators
    );
  }

  public getCollaboratorsOrderedByAgeInAscending(): Collaborator[] {
    return this.collaborators.sort((a, b) => a.age - b.age);
  }

  public getCollaboratorsOrderedByAgeInDescending(): Collaborator[] {
    return this.collaborators.sort((a, b) => b.age - a.age);
  }

  public getCollaboratorsOrderedByOccupation(): Collaborator[] {
    return this.collaborators.sort(sortCollaboratorsByOccupation);
  }

  public getCollaboratorsOrderedByAgeWithOccupationAsTiebrakerCriteria(): Collaborator[] {
    return this.collaborators.sort(
      sortCollaboratorsWithOccupationAsTiebrakerCriteria
    );
  }
}
