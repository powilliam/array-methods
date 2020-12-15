import { Student } from "../../src/entities/Student";
import { StudentsRepositoryImpl } from "../../src/repositories/implementations/StudentsRepositoryImpl";

describe("Exercices with Students Entity", () => {
  const repository = new StudentsRepositoryImpl();

  it("should be able to return all students name", () => {
    const names = repository.getStudentsName();
    expect(names).toContain("John Doe");
    expect(names).toContain("Margoe Rose");
    expect(names).toContain("Kayle");
  });

  it("should be able to return all students with scholarship", () => {
    const studentsWithScholarship = repository.getStudentsWithScholarship();
    expect(studentsWithScholarship).toContainEqual<Student>({
      id: 2,
      name: "Margoe Rose",
      age: 19,
      scholarship: true,
    });
    expect(studentsWithScholarship).toContainEqual<Student>({
      id: 3,
      name: "Kayle",
      age: 22,
      scholarship: true,
    });
  });

  it("should be able to return all students younger than tweenty three years old", () => {
    const studentsYoungerThanThreeYearsOld = repository.getStudentsYoungerThanTwentyThreeYearsOld();
    expect(studentsYoungerThanThreeYearsOld).toContainEqual<Student>({
      id: 2,
      name: "Margoe Rose",
      age: 19,
      scholarship: true,
    });
    expect(studentsYoungerThanThreeYearsOld).toContainEqual<Student>({
      id: 3,
      name: "Kayle",
      age: 22,
      scholarship: true,
    });
  });

  it("should be able to return the students age sum", () => {
    expect(repository.getStudentsAgeSum()).toBe(64);
  });

  it("should be able to return students age in ascending order", () => {
    expect(repository.getStudentsAgeInAscendingOrder()).toMatchObject([
      19,
      22,
      23,
    ]);
  });

  it("should be able to return students age in descending order", () => {
    expect(repository.getStudentsAgeInDescendingOrder()).toMatchObject([
      23,
      22,
      19,
    ]);
  });

  it("should be able to return if all students have scholarship", () => {
    expect(repository.doesAllStudentsHaveScholarship()).toBe(false);
  });

  it("should be able to return if have one student with scholarship at least", () => {
    expect(repository.doesHaveOneStudentWithScholarshipAtLeast()).toBe(true);
  });
});
