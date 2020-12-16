import { CountByOccupation } from "../../src/dto/CountByOccupation";
import { Collaborator, Occupation } from "../../src/entities/Collaborator";
import { GenerateCollaboratorsCountByOccupationReportUseCaseImpl } from "../../src/usecases/implementations/GenerateCollaboratorsCountByOccupationReportUseCaseImpl";

describe("GenerateCollaboratorsCountByOccupationReportUseCaseImpl", () => {
  const usecase = new GenerateCollaboratorsCountByOccupationReportUseCaseImpl();
  const collaborators: Collaborator[] = [
    { name: "William Porto", age: 20, occupation: Occupation.INTERN },
    { name: "William Porto", age: 20, occupation: Occupation.FRONT_END },
    { name: "William Porto", age: 20, occupation: Occupation.FRONT_END },
    { name: "William Porto", age: 20, occupation: Occupation.BACK_END },
  ];

  it("should be able to generate a count by occupation report", () => {
    expect(usecase.execute(collaborators)).toMatchObject<CountByOccupation>({
      "front-end": 2,
      "back-end": 1,
      designer: 0,
      intern: 1,
    });
  });
});
