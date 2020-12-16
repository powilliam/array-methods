import { CountByOccupation } from "../../dto/CountByOccupation";
import { Collaborator } from "../../entities/Collaborator";

export interface CollaboratorsRepository {
  getCollaboratorsAgeSum: () => number;
  getCollaboratorsCountByOccupation: () => CountByOccupation;
  getCollaboratorsOrderedByAgeInAscending: () => Collaborator[];
  getCollaboratorsOrderedByAgeInDescending: () => Collaborator[];
  getCollaboratorsOrderedByOccupation: () => Collaborator[];
  getCollaboratorsOrderedByAgeWithOccupationAsTiebrakerCriteria: () => Collaborator[];
}
