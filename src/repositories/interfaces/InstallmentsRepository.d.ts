import { InstallmentsStatusReport } from "../../dto/InstallmentsStatusReport";
import { Installment } from "../../entities/Installment";

export interface InstallmentsRepository {
  getInstallmentsTotalPrice: () => number;
  getInstallmentsStatusReport: () => InstallmentsStatusReport;
  getInstallmentsOrderedByPriceInDescending: () => Installment[];
  getInstallmentsOrderedByPriceInAscendingWithIdAsTiebrakerCriteriaInDescending: () => Installment[];
}
