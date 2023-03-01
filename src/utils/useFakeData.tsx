import { faker } from "@faker-js/faker";
import { useState, useEffect, useCallback } from "react";

const useFakeData = () => {
  type genderType = "female" | "male";
  const [data, setData] = useState("prova");
  const [users, setUsers] = useState<any>([]);
  const createFakeUsers = useCallback(() => {
    let employees = [];
    for (let index = 0; index < 99; index++) {
      let gender: genderType = "female";
      let type = "customer";
      if (index % 2 === 0) {
        gender = "male";
      }
      if (index < 3) {
        type = "admin";
      }
      const singleUser = {
        id: index,
        first_name: faker.name.firstName(gender),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        type: type,
        // type: faker.helpers.arrayElement(["admin", "customer"]),
        sex: gender,
        birthdate: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
        img: `https://randomuser.me/api/portraits/${
          gender === "female" ? `women` : `men`
        }/${index + 1}.jpg`,
        phone:faker.phone.number('+39 3## ## ## ###')
      };
      employees.push(singleUser);
    }
    return employees;
  }, []);

  useEffect(() => {
    setUsers(createFakeUsers());
  }, [createFakeUsers]);

  return {data, users};
};

export default useFakeData;
