import { InstallmentsRepositoryImpl } from "./repositories/implementations/InstallmentsRepositoryImpl";
import { GenerateInstallmentsStatusReportUseCaseImpl } from "./usecases/implementations/GenerateInstallmentsStatusReportUseCaseImpl";

const repository = new InstallmentsRepositoryImpl(
  new GenerateInstallmentsStatusReportUseCaseImpl()
);

console.log(
  `Installments total price: ${JSON.stringify(
    repository.getInstallmentsTotalPrice()
  )}`
);
console.log(
  `Installments status report: ${JSON.stringify(
    repository.getInstallmentsStatusReport()
  )}`
);
console.log(
  `Installments ordered by price in descending: ${JSON.stringify(
    repository.getInstallmentsOrderedByPriceInDescending()
  )}`
);
console.log(
  `Installments ordered by price in ascending with id as tiebraker criteria in descending: ${JSON.stringify(
    repository.getInstallmentsOrderedByPriceInAscendingWithIdAsTiebrakerCriteriaInDescending()
  )}`
);
