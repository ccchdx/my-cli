#!/usr/bin/env node
// 告诉浏览器用node来执行这个文件
// process.argv 返回当前进程的所有命令行参数，返回值是一个数组，前2个元素是node命令路径和被执行的文件路径
// console.log(process.argv)
// create-hdx --help    --help是自带的
const { program } = require('commander')
const chalk = require('chalk')
const inquirer = require('inquirer')
const ora = require('ora')
const figlet = require('figlet')

// ----- figlet -----
figlet('hello World!', function(err, data) {
  if(err) {
    console.log(err)
    return
  }
  console.log(data)
})

// ----- ora -----
// const spinner = ora('wait for loading...').start()

// ----- inquirer -----
// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'name',
//     message: 'Your project name:',
//     validate: (input) => {
//       if (!input) {
//         return 'Project name is required.'
//       }
//       return true
//     }
//   },
//   {
//     type: 'input',
//     name: 'description',
//     message: 'Project description:'
//   },
//   {
//     type: 'confirm',
//     name: 'ts',
//     message: 'install ts?',
//     default: false
//   }
// ]).then((answers) => {
//   console.log(answers)
// }).catch((err) => {
//   console.error(chalk.red(err.message))
// })

// ----- chalk -----
// console.log(chalk.red('yuiioii'));


// ----- commander ------
// program.name('hdx').usage('<command> [option]')
// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small', 'samll pizza size')
//   .option('-p, --pizza-type <type>', 'flavour of pizza');

// program.parse(process.argv)

// const options = program.opts();
// console.log(options);
