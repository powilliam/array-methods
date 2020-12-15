import { Student } from "../../entities/Student";

export interface StudentsRepository {
  getStudentsName: () => string[];
  getStudentsWithScholarship: () => Student[];
  getStudentsYoungerThanTwentyThreeYearsOld: () => Student[];
  getStudentsAgeSum: () => number;
  getStudentsAgeInAscendingOrder: () => number[];
  getStudentsAgeInDescendingOrder: () => number[];
  doesAllStudentsHaveScholarship: () => boolean;
  doesHaveOneStudentWithScholarshipAtLeast: () => boolean;
}
