import { StudentsDataSource } from "../../datasources/interfaces/StudentsDataSource";
import { Student } from "../../entities/Student";
import { StudentsRepository } from "../interfaces/StudentsRepository";

export class StudentsRepositoryImpl implements StudentsRepository {
  constructor(private readonly studentsDataSource: StudentsDataSource) {}

  public getStudentsName(): string[] {
    return this.studentsDataSource.getStudents().map((student) => student.name);
  }

  public getStudentsWithScholarship(): Student[] {
    return this.studentsDataSource
      .getStudents()
      .filter((student) => student.scholarship === true);
  }

  public getStudentsYoungerThanTwentyThreeYearsOld(): Student[] {
    return this.studentsDataSource
      .getStudents()
      .filter((student) => student.age < 23);
  }

  public getStudentsAgeSum(): number {
    return this.studentsDataSource
      .getStudents()
      .map((student) => student.age)
      .reduce((sum, currentStudentAge) => sum + currentStudentAge);
  }

  public getStudentsAgeInAscendingOrder(): number[] {
    return this.studentsDataSource
      .getStudents()
      .map((student) => student.age)
      .sort((a, b) => (a > b ? 1 : -1));
  }

  public getStudentsAgeInDescendingOrder(): number[] {
    return this.studentsDataSource
      .getStudents()
      .map((student) => student.age)
      .sort((a, b) => (a < b ? 1 : -1));
  }

  public getStudentAtFirstPosition(): Student {
    const [student] = this.studentsDataSource.getStudents();
    return student;
  }

  public getStudentNameAtSecondPosition(): string {
    const [, { name }] = this.studentsDataSource.getStudents();
    return name;
  }

  public getStudentAtThirdPosition(): Student {
    const [, , student] = this.studentsDataSource.getStudents();
    return student;
  }

  public doesAllStudentsHaveScholarship(): boolean {
    const students = this.studentsDataSource.getStudents();
    const studentsWithScholarship = students.filter(
      (student) => student.scholarship === true
    );
    return studentsWithScholarship.length === students.length;
  }

  public doesHaveOneStudentWithScholarshipAtLeast(): boolean {
    const students = this.studentsDataSource.getStudents();
    const studentsWithScholarship = students.filter(
      (student) => student.scholarship === true
    );
    return studentsWithScholarship.length >= 1;
  }
}
