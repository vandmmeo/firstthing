import chalk from "chalk";

let n = 0;

setInterval(() => {
    console.log(chalk.green(n));
    n = n + 1;
}, 10);