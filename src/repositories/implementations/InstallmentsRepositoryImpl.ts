import { InstallmentsStatusReport } from "../../dto/InstallmentsStatusReport";
import { Installment, InstallmentStatus } from "../../entities/Installment";
import { sortInstallmentsByPriceWithIdAsTiebrakerCriteriaInDescending } from "../../utils/sortInstallmentsByPriceWithIdAsTiebrakerCriteriaInDescending";
import { InstallmentsRepository } from "../interfaces/InstallmentsRepository";

export class InstallmentsRepositoryImpl implements InstallmentsRepository {
  private readonly installments: Installment[] = [
    { id: 1, price: 123.45, status: InstallmentStatus.PAID },
    { id: 2, price: 139.88, status: InstallmentStatus.PAID },
    { id: 3, price: 123.45, status: InstallmentStatus.PAID },
    { id: 4, price: 182.37, status: InstallmentStatus.OPEN },
    { id: 5, price: 133.93, status: InstallmentStatus.OPEN },
  ];

  public getInstallmentsTotalPrice(): number {
    return this.installments
      .map((installment) => installment.price)
      .reduce((total, currentPrice) => total + currentPrice);
  }

  public getInstallmentsStatusReport(): InstallmentsStatusReport {
    return this.installments.reduce(
      (installmentsStatusReport, currentInstallment) => {
        if (currentInstallment.status === InstallmentStatus.OPEN) {
          installmentsStatusReport.total_open += currentInstallment.price;
        }
        if (currentInstallment.status === InstallmentStatus.PAID) {
          installmentsStatusReport.total_paid += currentInstallment.price;
        }
        return installmentsStatusReport;
      },
      { total_open: 0, total_paid: 0 } as InstallmentsStatusReport
    );
  }

  public getInstallmentsOrderedByPriceInDescending(): Installment[] {
    return this.installments.sort((a, b) => b.price - a.price);
  }

  public getInstallmentsOrderedByPriceInAscendingWithIdAsTiebrakerCriteriaInDescending(): Installment[] {
    return this.installments.sort(
      sortInstallmentsByPriceWithIdAsTiebrakerCriteriaInDescending
    );
  }
}