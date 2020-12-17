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
  `Students at first position: ${JSON.stringify(
    repository.getStudentAtFirstPosition()
  )}`
);
console.log(
  `Students name at second position: ${JSON.stringify(
    repository.getStudentNameAtSecondPosition()
  )}`
);
console.log(
  `Students at third position: ${JSON.stringify(
    repository.getStudentAtThirdPosition()
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
