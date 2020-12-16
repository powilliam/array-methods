import { Installment } from "../entities/Installment";

export function sortInstallmentsByPriceWithIdAsTiebrakerCriteriaInDescending(
  a: Installment,
  b: Installment
) {
  if (a.price === b.price) {
    return b.id - a.id;
  }
  return a.price - b.price;
}
