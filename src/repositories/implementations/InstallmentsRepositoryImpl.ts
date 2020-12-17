import { InstallmentsStatusReport } from "../../dto/InstallmentsStatusReport";
import { Installment, InstallmentStatus } from "../../entities/Installment";
import { GenerateInstallmentsStatusReportUseCase } from "../../usecases/interfaces/GenerateInstallmentsStatusReportUseCase";
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

  constructor(
    private readonly generateInstallmentsStatusReportUseCase: GenerateInstallmentsStatusReportUseCase
  ) {}

  public getInstallmentsTotalPrice(): number {
    return this.installments
      .map((installment) => installment.price)
      .reduce((total, currentPrice) => total + currentPrice);
  }

  public getInstallmentsStatusReport(): InstallmentsStatusReport {
    return this.generateInstallmentsStatusReportUseCase.execute(
      this.installments
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
