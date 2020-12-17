import { CollaboratorsDataSource } from "../../src/datasources/interfaces/CollaboratorsDataSource";
import { CountByOccupation } from "../../src/dto/CountByOccupation";
import { Collaborator, Occupation } from "../../src/entities/Collaborator";
import { CollaboratorsRepositoryImpl } from "../../src/repositories/implementations/CollaboratorsRepositoryImpl";
import { GenerateCollaboratorsCountByOccupationReportUseCaseImpl } from "../../src/usecases/implementations/GenerateCollaboratorsCountByOccupationReportUseCaseImpl";

describe("Exercices with Collaborators Entity", () => {
  const dataSource: CollaboratorsDataSource = {
    getCollaborators: () => [
      { name: "William Porto", age: 19, occupation: Occupation.INTERN },
      { name: "William Porto", age: 19, occupation: Occupation.BACK_END },
      { name: "William Porto", age: 20, occupation: Occupation.FRONT_END },
      { name: "William Porto", age: 21, occupation: Occupation.DESIGNER },
    ],
  };
  const generateCollaboratorsCountByOccupationReportUseCaseImpl = new GenerateCollaboratorsCountByOccupationReportUseCaseImpl();
  const repository = new CollaboratorsRepositoryImpl(
    dataSource,
    generateCollaboratorsCountByOccupationReportUseCaseImpl
  );

  it("should be able to return the collaborators age sum", () => {
    const collaboratorsAgeSumFromRepository = repository.getCollaboratorsAgeSum();
    const collaboratorsAgeSumFromFakeRepository = 79;
    expect(collaboratorsAgeSumFromRepository).toBe(
      collaboratorsAgeSumFromFakeRepository
    );
  });

  it("should be able to return the collaborators count by occupation", () => {
    const collaboratorsCountByOccupationFromRepository = repository.getCollaboratorsCountByOccupation();
    const collaboratorsCountByOccupationFromFakeDataSource: CountByOccupation = {
      "back-end": 1,
      "front-end": 1,
      intern: 1,
      designer: 1,
    };
    expect(
      collaboratorsCountByOccupationFromRepository
    ).toMatchObject<CountByOccupation>(
      collaboratorsCountByOccupationFromFakeDataSource
    );
  });

  it("should be able to return the collaborators age ordered in ascending", () => {
    const collaboratorsOrderedByAgeInAscendingFromRepository = repository.getCollaboratorsOrderedByAgeInAscending();
    const collaboratorsOrderedByAgeInAscendingFromFakeDatSource = [
      { name: "William Porto", age: 19, occupation: Occupation.INTERN },
      { name: "William Porto", age: 19, occupation: Occupation.BACK_END },
      { name: "William Porto", age: 20, occupation: Occupation.FRONT_END },
      { name: "William Porto", age: 21, occupation: Occupation.DESIGNER },
    ];
    expect(collaboratorsOrderedByAgeInAscendingFromRepository).toMatchObject(
      collaboratorsOrderedByAgeInAscendingFromFakeDatSource
    );
  });

  it("should be able to return the collaborators age ordered in descending", () => {
    const collaboratorsOrderedByAgeInDescendingFromRepository = repository.getCollaboratorsOrderedByAgeInDescending();
    const collaboratorsOrderedByAgeInDescendingFromFakeDatSource = [
      { name: "William Porto", age: 21, occupation: Occupation.DESIGNER },
      { name: "William Porto", age: 20, occupation: Occupation.FRONT_END },
      { name: "William Porto", age: 19, occupation: Occupation.INTERN },
      { name: "William Porto", age: 19, occupation: Occupation.BACK_END },
    ];
    expect(collaboratorsOrderedByAgeInDescendingFromRepository).toMatchObject(
      collaboratorsOrderedByAgeInDescendingFromFakeDatSource
    );
  });

  it("should be able to return the collaborators ordered by occupation", () => {
    const collaboratorsOrderedByOccupationFromRepository = repository.getCollaboratorsOrderedByOccupation();
    const collaboratorsOrderedByOccupationFromFakeDataSource = [
      { name: "William Porto", age: 19, occupation: Occupation.INTERN },
      { name: "William Porto", age: 20, occupation: Occupation.FRONT_END },
      { name: "William Porto", age: 19, occupation: Occupation.BACK_END },
      { name: "William Porto", age: 21, occupation: Occupation.DESIGNER },
    ];
    expect(collaboratorsOrderedByOccupationFromRepository).toMatchObject<
      Collaborator[]
    >(collaboratorsOrderedByOccupationFromFakeDataSource);
  });

  it("should be able to return the collaborators ordered by age with occupation as tiebraker criteria", () => {
    const collaboratorsOrderedByAgeWithOccupationAsTiebrakerCriteriaFromRepository = repository.getCollaboratorsOrderedByAgeWithOccupationAsTiebrakerCriteria();
    const collaboratorsOrderedByAgeWithOccupationAsTiebrakerCriteriaFromFakeDataSource = [
      { name: "William Porto", age: 19, occupation: Occupation.INTERN },
      { name: "William Porto", age: 19, occupation: Occupation.BACK_END },
      { name: "William Porto", age: 20, occupation: Occupation.FRONT_END },
      { name: "William Porto", age: 21, occupation: Occupation.DESIGNER },
    ];
    expect(
      collaboratorsOrderedByAgeWithOccupationAsTiebrakerCriteriaFromRepository
    ).toMatchObject<Collaborator[]>(
      collaboratorsOrderedByAgeWithOccupationAsTiebrakerCriteriaFromFakeDataSource
    );
  });
});
