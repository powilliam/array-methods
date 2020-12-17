import { CountByOccupation } from "../../src/dto/CountByOccupation";
import { CollaboratorsRepositoryImpl } from "../../src/repositories/implementations/CollaboratorsRepositoryImpl";
import { GenerateCollaboratorsCountByOccupationReportUseCaseImpl } from "../../src/usecases/implementations/GenerateCollaboratorsCountByOccupationReportUseCaseImpl";

describe("Exercices with Collaborators Entity", () => {
  const repository = new CollaboratorsRepositoryImpl(
    new GenerateCollaboratorsCountByOccupationReportUseCaseImpl()
  );

  it("should be able to return the collaborators age sum", () => {
    expect(repository.getCollaboratorsAgeSum()).toBe(143);
  });

  it("should be able to return the collaborators count by occupation", () => {
    expect(
      repository.getCollaboratorsCountByOccupation()
    ).toMatchObject<CountByOccupation>({
      "front-end": 2,
      "back-end": 2,
      designer: 1,
      intern: 1,
    });
  });

  it("should be able to return the collaborators age ordered in ascending", () => {
    const collaborators = repository.getCollaboratorsOrderedByAgeInAscending();
    const ages = collaborators.map((collaborator) => collaborator.age);
    expect(ages).toMatchObject([19, 23, 23, 25, 25, 28]);
  });

  it("should be able to return the collaborators age ordered in descending", () => {
    const collaborators = repository.getCollaboratorsOrderedByAgeInDescending();
    const ages = collaborators.map((collaborator) => collaborator.age);
    expect(ages).toMatchObject([28, 25, 25, 23, 23, 19]);
  });

  it("should be able to return the collaborators ordered by occupation", () => {
    const collaborators = repository.getCollaboratorsOrderedByOccupation();
    const occupations = collaborators.map(
      (collaborator) => collaborator.occupation
    );
    expect(occupations).toMatchObject([
      "intern",
      "front-end",
      "front-end",
      "back-end",
      "back-end",
      "designer",
    ]);
  });

  it("should be able to return the collaborators ordered by age with occupation as tiebraker criteria", () => {
    const collaborators = repository.getCollaboratorsOrderedByAgeWithOccupationAsTiebrakerCriteria();
    const names = collaborators.map((collaborator) => collaborator.name);
    expect(names).toMatchObject([
      "Fernando",
      "Jéssica",
      "Márcia",
      "Juca",
      "Fabiane",
      "Vitória",
    ]);
  });
});
