import { Collaborator } from "../../entities/Collaborator";

export interface CollaboratorsDataSource {
  getCollaborators: () => Collaborator[];
}
