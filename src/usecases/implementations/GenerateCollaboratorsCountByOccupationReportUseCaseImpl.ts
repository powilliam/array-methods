import { CountByOccupation } from "../../dto/CountByOccupation";
import { Collaborator } from "../../entities/Collaborator";
import { GenerateCollaboratorsCountByOccupationReportUseCase } from "../interfaces/GenerateCollaboratorsCountByOccupationReportUseCase";

export class GenerateCollaboratorsCountByOccupationReportUseCaseImpl
  implements GenerateCollaboratorsCountByOccupationReportUseCase {
  execute(collaborators: Collaborator[]): CountByOccupation {
    return collaborators
      .map((collaborator) => collaborator.occupation)
      .reduce(
        (countByOccupation, occupation) => {
          if (occupation in countByOccupation) {
            countByOccupation[occupation]++;
          } else {
            countByOccupation[occupation] = 1;
          }
          return countByOccupation;
        },
        {
          "back-end": 0,
          "front-end": 0,
          designer: 0,
          intern: 0,
        } as CountByOccupation
      );
  }
}
