import { InstallmentsStatusReport } from "../../src/dto/InstallmentsStatusReport";
import { Installment, InstallmentStatus } from "../../src/entities/Installment";
import { GenerateInstallmentsStatusReportUseCaseImpl } from "../../src/usecases/implementations/GenerateInstallmentsStatusReportUseCaseImpl";

describe("GenerateInstallmentsStatusReportUseCaseImpl", () => {
  const usecase = new GenerateInstallmentsStatusReportUseCaseImpl();
  const installments: Installment[] = [
    { id: 0, price: 10, status: InstallmentStatus.OPEN },
    { id: 1, price: 20, status: InstallmentStatus.OPEN },
    { id: 2, price: 30, status: InstallmentStatus.PAID },
  ];

  it("should be able to generate a status report", () => {
    expect(
      usecase.execute(installments)
    ).toMatchObject<InstallmentsStatusReport>({
      total_open: 30,
      total_paid: 30,
    });
  });
});
