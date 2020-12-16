import { Collaborator, Occupation } from "../entities/Collaborator";

export function sortCollaboratorsByOccupation(
  a: Collaborator,
  b: Collaborator
) {
  if (
    a.occupation === Occupation.INTERN &&
    (b.occupation === Occupation.FRONT_END ||
      b.occupation === Occupation.BACK_END ||
      b.occupation === Occupation.DESIGNER)
  ) {
    return -1;
  } else if (
    a.occupation === Occupation.FRONT_END &&
    (b.occupation === Occupation.BACK_END ||
      b.occupation === Occupation.DESIGNER)
  ) {
    return -1;
  } else if (
    a.occupation === Occupation.BACK_END &&
    b.occupation === Occupation.DESIGNER
  ) {
    return -1;
  } else if (
    a.occupation === Occupation.DESIGNER &&
    (b.occupation === Occupation.FRONT_END ||
      b.occupation === Occupation.BACK_END ||
      b.occupation === Occupation.INTERN)
  ) {
    return 1;
  }
  return 0;
}
