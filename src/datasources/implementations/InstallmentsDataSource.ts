import { Installment, InstallmentStatus } from "../../entities/Installment";
import { InstallmentsDataSource } from "../interfaces/InstallmentsDataSource";

export class InstallmentsDataSourceImpl implements InstallmentsDataSource {
  public getInstallments(): Installment[] {
    return [
      { id: 1, price: 123.45, status: InstallmentStatus.PAID },
      { id: 2, price: 139.88, status: InstallmentStatus.PAID },
      { id: 3, price: 123.45, status: InstallmentStatus.PAID },
      { id: 4, price: 182.37, status: InstallmentStatus.OPEN },
      { id: 5, price: 133.93, status: InstallmentStatus.OPEN },
    ];
  }
}
