import { CountByOccupation } from "../../dto/CountByOccupation";
import { Collaborator } from "../../entities/Collaborator";

export interface GenerateCollaboratorsCountByOccupationReportUseCase {
  execute: (collaborators: Collaborator[]) => CountByOccupation;
}
