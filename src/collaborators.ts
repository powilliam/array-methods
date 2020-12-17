import { CollaboratorsDataSourceImpl } from "./datasources/implementations/CollaboratorsDataSourceImpl";
import { CollaboratorsRepositoryImpl } from "./repositories/implementations/CollaboratorsRepositoryImpl";
import { GenerateCollaboratorsCountByOccupationReportUseCaseImpl } from "./usecases/implementations/GenerateCollaboratorsCountByOccupationReportUseCaseImpl";

const dataSource = new CollaboratorsDataSourceImpl();
const generateCollaboratorsCountByOccupationReportUseCaseImpl = new GenerateCollaboratorsCountByOccupationReportUseCaseImpl();
const repository = new CollaboratorsRepositoryImpl(
  dataSource,
  generateCollaboratorsCountByOccupationReportUseCaseImpl
);

console.log(
  `Collaborators age sum: ${JSON.stringify(
    repository.getCollaboratorsAgeSum()
  )}`
);
console.log(
  `Collaborators count by occupation: ${JSON.stringify(
    repository.getCollaboratorsCountByOccupation()
  )}`
);
console.log(
  `Collaborators ordered by age in ascending: ${JSON.stringify(
    repository.getCollaboratorsOrderedByAgeInAscending()
  )}`
);
console.log(
  `Collaborators ordered by age in descending: ${JSON.stringify(
    repository.getCollaboratorsOrderedByAgeInDescending()
  )}`
);
console.log(
  `Collaborators ordered by occupation: ${JSON.stringify(
    repository.getCollaboratorsOrderedByOccupation()
  )}`
);
console.log(
  `Collaborators ordered by age with occupation as tiebraker criteria: ${JSON.stringify(
    repository.getCollaboratorsOrderedByAgeWithOccupationAsTiebrakerCriteria()
  )}`
);
