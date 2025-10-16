import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";
import pokemon from "pokemon";
import { generate, count } from "random-words";
import { say } from "cowsay";
import { faker } from "@faker-js/faker";
import { fs } from "fs";
import { log } from "console";

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// const spinner = ora("Loading unicorns").start();

// setTimeout(() => {
//   spinner.color = "yellow";
//   spinner.text = "Loading rainbows";
//   spinner.stop(1);
// }, 1000);

// console.log(pokemon.random());

// console.log(generate(5));

// console.log(say({ text: "grazing in the browser" }));

// export function createRandomUser() {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }

// export const users = faker.helpers.multiple(createRandomUser, {
//   count: 5,
// });
// console.log(users);

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log("error");
  }
  const search = "async";
  const index = data.indexOf(search);

  if (index != -1) {
    `console.log(this text exist at ${index}`;
  } else {
    console.log(`you
    `);
  }
});
