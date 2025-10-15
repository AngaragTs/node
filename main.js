import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";
import pokemon from "pokemon";
import { generate, count } from "random-words";
import { say } from "cowsay";

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

console.log(say({ text: "grazing in the browser" }));
