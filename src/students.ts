import { StudentsRepositoryImpl } from "./repositories/implementations/StudentsRepositoryImpl";

const repository = new StudentsRepositoryImpl();

console.log(`Students name: ${JSON.stringify(repository.getStudentsName())}`);
console.log(
  `Students with scholarship: ${JSON.stringify(
    repository.getStudentsWithScholarship()
  )}`
);
console.log(
  `Students younger than 23yo: ${JSON.stringify(
    repository.getStudentsYoungerThanTwentyThreeYearsOld()
  )}`
);
console.log(
  `Students age sum: ${JSON.stringify(repository.getStudentsAgeSum())}`
);
console.log(
  `Students age in ascending order: ${JSON.stringify(
    repository.getStudentsAgeInAscendingOrder()
  )}`
);
console.log(
  `Students age in descening order: ${JSON.stringify(
    repository.getStudentsAgeInDescendingOrder()
  )}`
);
console.log(
  `Does all students have sholarship?: ${JSON.stringify(
    repository.doesAllStudentsHaveScholarship()
  )}`
);
console.log(
  `Does have one student with scholarship at least?: ${JSON.stringify(
    repository.doesHaveOneStudentWithScholarshipAtLeast()
  )}`
);
