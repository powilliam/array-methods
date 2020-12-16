export enum InstallmentStatus {
  OPEN = "OPEN",
  PAID = "PAID",
}

export class Installment {
  public id!: number;
  public price!: number;
  public status!: InstallmentStatus;
}
