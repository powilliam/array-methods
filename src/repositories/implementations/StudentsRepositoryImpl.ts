import { Student } from "../../entities/Student";
import { StudentsRepository } from "../interfaces/StudentsRepository";

export class StudentsRepositoryImpl implements StudentsRepository {
  private readonly students: Student[] = [
    { id: 1, name: "John Doe", age: 23, scholarship: false },
    { id: 2, name: "Margoe Rose", age: 19, scholarship: true },
    { id: 3, name: "Kayle", age: 22, scholarship: true },
  ];

  public getStudentsName(): string[] {
    return this.students.map((student) => student.name);
  }

  public getStudentsWithScholarship(): Student[] {
    return this.students.filter((student) => student.scholarship === true);
  }

  public getStudentsYoungerThanTwentyThreeYearsOld(): Student[] {
    return this.students.filter((student) => student.age < 23);
  }

  public getStudentsAgeSum(): number {
    return this.students
      .map((student) => student.age)
      .reduce((sum, currentStudentAge) => sum + currentStudentAge);
  }

  public getStudentsAgeInAscendingOrder(): number[] {
    return this.students
      .map((student) => student.age)
      .sort((a, b) => (a > b ? 1 : -1));
  }

  public getStudentsAgeInDescendingOrder(): number[] {
    return this.students
      .map((student) => student.age)
      .sort((a, b) => (a < b ? 1 : -1));
  }

  public getStudentAtFirstPosition(): Student {
    const [student] = this.students;
    return student;
  }

  public getStudentNameAtSecondPosition(): string {
    const [, { name }] = this.students;
    return name;
  }

  public getStudentAtThirdPosition(): Student {
    const [, , student] = this.students;
    return student;
  }

  public doesAllStudentsHaveScholarship(): boolean {
    return this.getStudentsWithScholarship().length === this.students.length;
  }

  public doesHaveOneStudentWithScholarshipAtLeast(): boolean {
    return this.getStudentsWithScholarship().length >= 1;
  }
}
