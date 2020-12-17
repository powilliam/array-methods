import { Installment } from "../../entities/Installment";

export interface InstallmentsDataSource {
  getInstallments: () => Installment[];
}
