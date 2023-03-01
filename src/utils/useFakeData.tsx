import { faker } from "@faker-js/faker";
import { useState, useEffect, useCallback } from "react";

const useFakeData = () => {
  type genderType = "female" | "male";

  const [data, setData] = useState("prova");

  const createFakeUsers = useCallback(() => {
    let employees = [];
    for (let index = 0; index < 99; index++) {
      let gender: genderType = "female";
      if (index % 2 === 0) {
        gender = "male";
      }
      const singleUser = {
        id: index,
        first_name: faker.name.firstName(gender),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        type: faker.helpers.arrayElement(["admin", "customer"]),
        sex: gender,
        birthdate: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
        img: `https://randomuser.me/api/portraits/${
          gender === "female" ? `women` : `men`
        }/${index + 1}.jpg`,
      };
      employees.push(singleUser);
    }
    return employees;
  }, []);

  useEffect(() => {
    console.log(createFakeUsers());
  }, [createFakeUsers]);
  return [data];
};

export default useFakeData;
