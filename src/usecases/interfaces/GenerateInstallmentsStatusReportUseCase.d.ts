import { InstallmentsStatusReport } from "../../dto/InstallmentsStatusReport";
import { Installment } from "../../entities/Installment";

export interface GenerateInstallmentsStatusReportUseCase {
  execute: (installments: Installment[]) => InstallmentsStatusReport;
}
