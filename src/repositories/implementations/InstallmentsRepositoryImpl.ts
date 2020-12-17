import { InstallmentsDataSource } from "../../datasources/interfaces/InstallmentsDataSource";
import { InstallmentsStatusReport } from "../../dto/InstallmentsStatusReport";
import { Installment } from "../../entities/Installment";
import { GenerateInstallmentsStatusReportUseCase } from "../../usecases/interfaces/GenerateInstallmentsStatusReportUseCase";
import { sortInstallmentsByPriceWithIdAsTiebrakerCriteriaInDescending } from "../../utils/sortInstallmentsByPriceWithIdAsTiebrakerCriteriaInDescending";
import { InstallmentsRepository } from "../interfaces/InstallmentsRepository";

export class InstallmentsRepositoryImpl implements InstallmentsRepository {
  constructor(
    private readonly installmentsDataSource: InstallmentsDataSource,
    private readonly generateInstallmentsStatusReportUseCase: GenerateInstallmentsStatusReportUseCase
  ) {}

  public getInstallmentsTotalPrice(): number {
    return this.installmentsDataSource
      .getInstallments()
      .map((installment) => installment.price)
      .reduce((total, currentPrice) => total + currentPrice);
  }

  public getInstallmentsStatusReport(): InstallmentsStatusReport {
    return this.generateInstallmentsStatusReportUseCase.execute(
      this.installmentsDataSource.getInstallments()
    );
  }

  public getInstallmentsOrderedByPriceInDescending(): Installment[] {
    return this.installmentsDataSource
      .getInstallments()
      .sort((a, b) => b.price - a.price);
  }

  public getInstallmentsOrderedByPriceInAscendingWithIdAsTiebrakerCriteriaInDescending(): Installment[] {
    return this.installmentsDataSource
      .getInstallments()
      .sort(sortInstallmentsByPriceWithIdAsTiebrakerCriteriaInDescending);
  }
}
