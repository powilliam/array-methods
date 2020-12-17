import { InstallmentsDataSource } from "../../src/datasources/interfaces/InstallmentsDataSource";
import { InstallmentsStatusReport } from "../../src/dto/InstallmentsStatusReport";
import { InstallmentStatus } from "../../src/entities/Installment";
import { InstallmentsRepositoryImpl } from "../../src/repositories/implementations/InstallmentsRepositoryImpl";
import { GenerateInstallmentsStatusReportUseCaseImpl } from "../../src/usecases/implementations/GenerateInstallmentsStatusReportUseCaseImpl";

describe("Exercices with Installments Entity", () => {
  const dataSource: InstallmentsDataSource = {
    getInstallments: () => [
      { id: 0, price: 10, status: InstallmentStatus.OPEN },
      { id: 1, price: 20, status: InstallmentStatus.OPEN },
      { id: 2, price: 30, status: InstallmentStatus.PAID },
      { id: 3, price: 40, status: InstallmentStatus.PAID },
    ],
  };
  const generateInstallmentsStatusReportUseCase = new GenerateInstallmentsStatusReportUseCaseImpl();
  const repository = new InstallmentsRepositoryImpl(
    dataSource,
    generateInstallmentsStatusReportUseCase
  );

  it("should be able to return the installments total price", () => {
    const installmentsTotalPriceFromRepository = repository.getInstallmentsTotalPrice();
    const installmentsTotalPriceFromFakeDataSource = 10 + 20 + 30 + 40;
    expect(installmentsTotalPriceFromRepository).toBeCloseTo(
      installmentsTotalPriceFromFakeDataSource
    );
  });

  it("should be able to return the installments status report", () => {
    const installmentsStatusReportFromRepository = repository.getInstallmentsStatusReport();
    const installmentStatusReportFromFakeDataSource: InstallmentsStatusReport = {
      total_paid: 70,
      total_open: 30,
    };
    expect(
      installmentsStatusReportFromRepository
    ).toMatchObject<InstallmentsStatusReport>(
      installmentStatusReportFromFakeDataSource
    );
  });

  it("should be able to return the installments ordered by price in descending", () => {
    const installmentsOrderedByPriceInDesceningFromRepository = repository.getInstallmentsOrderedByPriceInDescending();
    const installmentsOrderedByPriceInDesceningFromFakeDataSource = [
      { id: 3, price: 40, status: InstallmentStatus.PAID },
      { id: 2, price: 30, status: InstallmentStatus.PAID },
      { id: 1, price: 20, status: InstallmentStatus.OPEN },
      { id: 0, price: 10, status: InstallmentStatus.OPEN },
    ];
    expect(installmentsOrderedByPriceInDesceningFromRepository).toMatchObject(
      installmentsOrderedByPriceInDesceningFromFakeDataSource
    );
  });

  it("should be able to return the installments ordered by price in ascending with id as tiebraker criteria in descending", () => {
    const installmentsOrderedByPriceInAscendingWithIdAsTiebrakerCriteriaInDescendingFromRepository = repository.getInstallmentsOrderedByPriceInAscendingWithIdAsTiebrakerCriteriaInDescending();
    const installmentsOrderedByPriceInAscendingWithIdAsTiebrakerCriteriaInDescendingFromFakeDataSource = [
      { id: 0, price: 10, status: InstallmentStatus.OPEN },
      { id: 1, price: 20, status: InstallmentStatus.OPEN },
      { id: 2, price: 30, status: InstallmentStatus.PAID },
      { id: 3, price: 40, status: InstallmentStatus.PAID },
    ];
    expect(
      installmentsOrderedByPriceInAscendingWithIdAsTiebrakerCriteriaInDescendingFromRepository
    ).toMatchObject(
      installmentsOrderedByPriceInAscendingWithIdAsTiebrakerCriteriaInDescendingFromFakeDataSource
    );
  });
});
