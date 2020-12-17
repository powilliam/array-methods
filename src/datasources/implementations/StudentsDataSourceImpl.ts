import { Student } from "../../entities/Student";
import { StudentsDataSource } from "../interfaces/StudentsDataSource";

export class StudentsDataSourceImpl implements StudentsDataSource {
  public getStudents(): Student[] {
    return [
      { id: 1, name: "John Doe", age: 23, scholarship: false },
      { id: 2, name: "Margoe Rose", age: 19, scholarship: true },
      { id: 3, name: "Kayle", age: 22, scholarship: true },
    ];
  }
}
