import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";

const useFakeData = () => {
  type genderType = "female" | "male";

  const [data, setData] = useState("prova");
  var employees = [];
  for (var id = 0; id < 5; id++) {
    let gender: genderType = "female";
    if (id % 2 === 0) {
      gender = "male";
    }
    const singleUser = {
      id: id,
      first_name: faker.name.firstName(gender),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      type: faker.helpers.arrayElement(["admin", "customer"]),
      sex: gender,
      birthdate: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
    };
    employees.push(singleUser);
  }
  console.log(employees);

  return [data];
};

export default useFakeData;
