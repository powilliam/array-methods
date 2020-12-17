import { Student } from "../../entities/Student";

export interface StudentsDataSource {
  getStudents: () => Student[];
}
