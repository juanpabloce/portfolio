import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

// exec('npm install chalk -D').stdout.on('data', (data) => {
//   console.log(data);
// });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentESLintRC = `module.exports = {
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    "eslint-config-prettier",
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: "detect",
    },
    // Tells eslint how to resolve imports
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    // Add your own rules here to override ones from the extended configs.
  },
}`;

const contentESLintIgnore = `node_modules/
dist/
.prettierrc.cjs
.eslintrc.cjs
env.d.ts`;

const contentPrettierRC = `module.exports = {
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 120,
  "bracketSpacing": true
}`;

const contentPrettierIgnore = `node_modules/
dist/
.prettierrc.cjs`;

// Create all the files
fs.writeFileSync(path.join(__dirname, '.eslintrc.cjs'), contentESLintRC);
fs.writeFileSync(path.join(__dirname, '.eslintignore'), contentESLintIgnore);
fs.writeFileSync(path.join(__dirname, '.prettierrc.cjs'), contentPrettierRC);
fs.writeFileSync(path.join(__dirname, '.prettierignore'), contentPrettierIgnore);

// Install all the dependencies
const command =
  'install eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react chalk -D';

const installDeps = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', command.split(' '));

installDeps.stdout.on('data', (data) => {
  console.log(chalk.green(`stdout: ${data}`));
});

installDeps.stderr.on('data', (data) => {
  console.log(chalk.yellow(`stderr: ${data}`));
});

installDeps.on('error', (error) => {
  console.log(chalk.red(`error: ${error.message}`));
});

installDeps.on('close', (code) => {
  console.log(chalk.blue(`child process exited with code ${code}`));
});
