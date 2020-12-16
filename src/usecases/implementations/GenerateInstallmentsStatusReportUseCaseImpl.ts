import { InstallmentsStatusReport } from "../../dto/InstallmentsStatusReport";
import { Installment, InstallmentStatus } from "../../entities/Installment";
import { GenerateInstallmentsStatusReportUseCase } from "../interfaces/GenerateInstallmentsStatusReportUseCase";

export class GenerateInstallmentsStatusReportUseCaseImpl
  implements GenerateInstallmentsStatusReportUseCase {
  execute(installments: Installment[]): InstallmentsStatusReport {
    return installments.reduce(
      (installmentsStatusReport, installment) => {
        switch (installment.status) {
          case InstallmentStatus.OPEN:
            installmentsStatusReport.total_open += installment.price;
            break;

          case InstallmentStatus.PAID:
            installmentsStatusReport.total_paid += installment.price;
            break;

          default:
            break;
        }
        return installmentsStatusReport;
      },
      { total_open: 0, total_paid: 0 } as InstallmentsStatusReport
    );
  }
}
