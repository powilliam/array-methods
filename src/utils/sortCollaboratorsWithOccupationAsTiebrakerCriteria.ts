import { Collaborator } from "../entities/Collaborator";
import { sortCollaboratorsByOccupation } from "./sortCollaboratorsByOccupation";

export function sortCollaboratorsWithOccupationAsTiebrakerCriteria(
  a: Collaborator,
  b: Collaborator
) {
  if (a.age === b.age) sortCollaboratorsByOccupation(a, b);
  return a.age - b.age;
}
