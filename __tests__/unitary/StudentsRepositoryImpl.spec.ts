import { StudentsDataSource } from "../../src/datasources/interfaces/StudentsDataSource";
import { Student } from "../../src/entities/Student";
import { StudentsRepositoryImpl } from "../../src/repositories/implementations/StudentsRepositoryImpl";

describe("Exercices with Students Entity", () => {
  const dataSource: StudentsDataSource = {
    getStudents: () => [
      { id: 0, name: "William Porto", age: 20, scholarship: false },
      { id: 1, name: "William Porto", age: 28, scholarship: true },
      { id: 2, name: "William Porto", age: 25, scholarship: true },
      { id: 3, name: "William Porto", age: 20, scholarship: false },
    ],
  };
  const repository = new StudentsRepositoryImpl(dataSource);

  it("should be able to return all students name", () => {
    const studentsNameFromRepository = repository.getStudentsName();
    const studentsNameFromFakeDataSource = [
      "William Porto",
      "William Porto",
      "William Porto",
      "William Porto",
    ];
    expect(studentsNameFromRepository).toMatchObject(
      studentsNameFromFakeDataSource
    );
  });

  it("should be able to return all students with scholarship", () => {
    const studentsWithScholarshipFromRepository = repository.getStudentsWithScholarship();
    const studentsWithScholarshipFromFakeDataSource = [
      { id: 1, name: "William Porto", age: 28, scholarship: true },
      { id: 2, name: "William Porto", age: 25, scholarship: true },
    ];
    expect(studentsWithScholarshipFromRepository).toMatchObject(
      studentsWithScholarshipFromFakeDataSource
    );
  });

  it("should be able to return all students younger than tweenty three years old", () => {
    const studentsYoungerThanThreeYearsOldFromRepository = repository.getStudentsYoungerThanTwentyThreeYearsOld();
    const studentsYoungerThanThreeYearsOldFromFakeDataSource = [
      { id: 0, name: "William Porto", age: 20, scholarship: false },
      { id: 3, name: "William Porto", age: 20, scholarship: false },
    ];
    expect(studentsYoungerThanThreeYearsOldFromRepository).toMatchObject(
      studentsYoungerThanThreeYearsOldFromFakeDataSource
    );
  });

  it("should be able to return the students age sum", () => {
    const studentsAgeSumFromRepository = repository.getStudentsAgeSum();
    const studentsAgeSumFromFakeDataSource = 20 + 20 + 25 + 28;
    expect(studentsAgeSumFromRepository).toBe(studentsAgeSumFromFakeDataSource);
  });

  it("should be able to return students age in ascending order", () => {
    const studentsAgeInAscendingOrderFromRepository = repository.getStudentsAgeInAscendingOrder();
    const studentsAgeInAscendingOrderFromFakeDataSource = [20, 20, 25, 28];
    expect(studentsAgeInAscendingOrderFromRepository).toMatchObject(
      studentsAgeInAscendingOrderFromFakeDataSource
    );
  });

  it("should be able to return students age in descending order", () => {
    const studentsAgeInDescendingOrderFromRepository = repository.getStudentsAgeInDescendingOrder();
    const studentsAgeInDescendingOrderFromFakeDataSource = [28, 25, 20, 20];
    expect(studentsAgeInDescendingOrderFromRepository).toMatchObject(
      studentsAgeInDescendingOrderFromFakeDataSource
    );
  });

  it("should be able to return a student at first position", () => {
    const studentAtFirstPositionFromRepository = repository.getStudentAtFirstPosition();
    const studentAtFirstPositionFromFakeDataSource = {
      id: 0,
      name: "William Porto",
      age: 20,
      scholarship: false,
    };
    expect(studentAtFirstPositionFromRepository).toMatchObject<Student>(
      studentAtFirstPositionFromFakeDataSource
    );
  });

  it("should be able to return the name of student at second position", () => {
    const studentNameAtSecondPositionFromRepository = repository.getStudentNameAtSecondPosition();
    const studentNameAtSecondPositionFromFakeDataSource = "William Porto";
    expect(studentNameAtSecondPositionFromRepository).toMatch(
      studentNameAtSecondPositionFromFakeDataSource
    );
  });

  it("should be able to return the student at third position", () => {
    const studentAtThirdPositionFromRepository = repository.getStudentAtThirdPosition();
    const studentAtThirdPositionFromFakeDataSource = {
      id: 2,
      name: "William Porto",
      age: 25,
      scholarship: true,
    };
    expect(studentAtThirdPositionFromRepository).toMatchObject<Student>(
      studentAtThirdPositionFromFakeDataSource
    );
  });

  it("should be able to return if all students have scholarship", () => {
    expect(repository.doesAllStudentsHaveScholarship()).toBe(false);
  });

  it("should be able to return if have one student with scholarship at least", () => {
    expect(repository.doesHaveOneStudentWithScholarshipAtLeast()).toBe(true);
  });
});
