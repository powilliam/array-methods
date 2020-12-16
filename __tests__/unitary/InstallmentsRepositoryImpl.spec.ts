import { InstallmentsStatusReport } from "../../src/dto/InstallmentsStatusReport";
import { InstallmentsRepositoryImpl } from "../../src/repositories/implementations/InstallmentsRepositoryImpl";

describe("Exercices with Installments Entity", () => {
  const repository = new InstallmentsRepositoryImpl();

  it("should be able to return the installments total price", () => {
    expect(repository.getInstallmentsTotalPrice()).toBeCloseTo(703.08);
  });

  it("should be able to return the installments status report", () => {
    expect(
      repository.getInstallmentsStatusReport()
    ).toMatchObject<InstallmentsStatusReport>({
      total_paid: 386.78,
      total_open: 316.3,
    });
  });

  it("should be able to return the installments ordered by price in descending", () => {
    const installments = repository.getInstallmentsOrderedByPriceInDescending();
    const prices = installments.map((installment) => installment.price);
    expect(prices).toMatchObject([182.37, 139.88, 133.93, 123.45, 123.45]);
  });

  it("should be able to return the installments ordered by price in ascending with id as tiebraker criteria in descending", () => {
    const installments = repository.getInstallmentsOrderedByPriceInAscendingWithIdAsTiebrakerCriteriaInDescending();
    const ids = installments.map((installment) => installment.id);
    expect(ids).toMatchObject([3, 1, 5, 2, 4]);
  });
});
