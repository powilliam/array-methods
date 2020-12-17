import { CollaboratorsDataSource } from "../../datasources/interfaces/CollaboratorsDataSource";
import { CountByOccupation } from "../../dto/CountByOccupation";
import { Collaborator } from "../../entities/Collaborator";
import { GenerateCollaboratorsCountByOccupationReportUseCase } from "../../usecases/interfaces/GenerateCollaboratorsCountByOccupationReportUseCase";
import { sortCollaboratorsByOccupation } from "../../utils/sortCollaboratorsByOccupation";
import { sortCollaboratorsWithOccupationAsTiebrakerCriteria } from "../../utils/sortCollaboratorsWithOccupationAsTiebrakerCriteria";
import { CollaboratorsRepository } from "../interfaces/CollaboratorsRepository";

export class CollaboratorsRepositoryImpl implements CollaboratorsRepository {
  constructor(
    private readonly collaboratorsDataSource: CollaboratorsDataSource,
    private readonly generateCollaboratorsCountByOccupationReportUseCase: GenerateCollaboratorsCountByOccupationReportUseCase
  ) {}

  public getCollaboratorsAgeSum(): number {
    return this.collaboratorsDataSource
      .getCollaborators()
      .map((collaborator) => collaborator.age)
      .reduce((sum, currentAge) => sum + currentAge);
  }

  public getCollaboratorsCountByOccupation(): CountByOccupation {
    return this.generateCollaboratorsCountByOccupationReportUseCase.execute(
      this.collaboratorsDataSource.getCollaborators()
    );
  }

  public getCollaboratorsOrderedByAgeInAscending(): Collaborator[] {
    return this.collaboratorsDataSource
      .getCollaborators()
      .sort((a, b) => a.age - b.age);
  }

  public getCollaboratorsOrderedByAgeInDescending(): Collaborator[] {
    return this.collaboratorsDataSource
      .getCollaborators()
      .sort((a, b) => b.age - a.age);
  }

  public getCollaboratorsOrderedByOccupation(): Collaborator[] {
    return this.collaboratorsDataSource
      .getCollaborators()
      .sort((a, b) => sortCollaboratorsByOccupation(a, b));
  }

  public getCollaboratorsOrderedByAgeWithOccupationAsTiebrakerCriteria(): Collaborator[] {
    return this.collaboratorsDataSource
      .getCollaborators()
      .sort((a, b) => sortCollaboratorsWithOccupationAsTiebrakerCriteria(a, b));
  }
}
