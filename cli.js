#!/usr/bin/env node
"use strict";
const meow = require("meow");
const fs = require("fs");
const validateProjectName = require("validate-npm-package-name");
const chalk = require("chalk");
const path = require("path");

const DIR = process.cwd();

const cli = meow(`
	Usage
	  $ create-react-component <project-name>

	Examples
	  $ create-react-component slider
`);

let appName;

function install(dir, name) {
  if (!name) {
    console.error(`${chalk.red("appName cant be null")}`);
    process.exit(1);
  }

  appName = name;

  const validationResult = validateProjectName(appName);

  if (!validationResult.validForNewPackages) {
    console.error(
      `Could not create a project called ${chalk.red(
        `"${appName}"`
      )} because of npm naming restrictions:`
    );
    printValidationResults(validationResult.errors);
    printValidationResults(validationResult.warnings);
    process.exit(1);
  }

  const packagesPath = path.resolve(dir, "packages");
  const newProjectPath = appName;
  try {
    fs.mkdirSync(`${DIR}/${appName}`);
    createDirectoryContents(packagesPath, newProjectPath);

    console.log(
      `Create successfully, your projectName: ${chalk.green(`"${appName}"`)} 
         use cd ${chalk.green(
           `"${appName}"`
         )} and npm install or (yarn) to enjoy it `
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

function createDirectoryContents(templatePath, newProjectPath) {
  const files = fs.readdirSync(templatePath);
  files.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, "utf8");
      // update package name
      if (file === "package.json") {
        contents = contents.replace("create-react-component", appName);
      }
      const writePath = `${DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${DIR}/${newProjectPath}/${file}`);

      // recursive call
      createDirectoryContents(
        `${templatePath}/${file}`,
        `${newProjectPath}/${file}`
      );
    }
  });
}

install(DIR, cli.input[0]);
