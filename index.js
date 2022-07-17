const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    // Questions
    {
      type: 'input',
      message: 'What is the title of this project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter description for this project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions.',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage instructions.',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'Choose license',
        name: 'license',
        choices:['MIT License', 'GNU General Public License v3.0', 'Mozilla Public License 2.0' ]
      },
      {
        type: 'input',
        message: 'Enter instructions for contributing.',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Enter test instructions',
        name: 'testing',
      },
      {
        type: 'input',
        message: 'Enter questions information',
        name: 'questions',
      },
      {
        type: 'input',
        message: 'Enter GitHub username',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter email',
        name: 'email',
      },
  ])


  .then((data) => {
console.log(data)
// This line of code creates Readme.md
fs.writeFile('README-GENERATED.md', (createReadme(data)), (err) =>
err ? console.log(err) : console.log("Success!")
)
  });
// This function picks a license badge
  function renderLicenseBadge(data) {
    let licenseType = `${data.license}`
    let licenseChosen = ''
    if (licenseType === 'MIT License') {
        licenseChosen = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (licenseType === 'GNU General Public License v3.0') {
        licenseChosen = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (licenseType === 'Mozilla Public License 2.0') {
        licenseChosen = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
    } 
    return licenseChosen;
  };
// This function displays license info link
  function renderLicenseLink(data) {
    let licenseType = `${data.license}`
    let licenseChosen = ''
    if (licenseType === 'MIT License') {
        licenseChosen = "(https://opensource.org/licenses/MIT)"
    } else if (licenseType === 'GNU General Public License v3.0') {
        licenseChosen = "(https://www.gnu.org/licenses/gpl-3.0)"
    } else if (licenseType === 'Mozilla Public License 2.0') {
        licenseChosen = "(https://opensource.org/licenses/MPL-2.0)"
    } 
    return licenseChosen;
  };
// This function displays under which license app is covered in license section
  function renderLicenseSection(data) {
    let licenseType = `${data.license}`
    let licenseChosen = ''
    if (licenseType === 'MIT License') {
        licenseChosen = 'MIT License'
    } else if (licenseType === 'GNU General Public License v3.0') {
        licenseChosen = 'GNU General Public License v3.0'
    } else if (licenseType === 'Mozilla Public License 2.0') {
        licenseChosen = 'Mozilla Public License 2.0'
    } 
    return licenseChosen;
  }
//This function populated Readme with data  
function createReadme(data) {
  return  `
### License: ${renderLicenseBadge(data)}, ${renderLicenseLink(data)}
# Title: ${data.title}

## Description:

${data.description}

## Table of Contents:

* [Title](#title)

* [Description](#description)

* [Table of Contents](#table-of-contents)

* [Installation](#installation)

* [Usage](#usage)

* [License](#licensing)

* [Contributing](#contributing)

* [Testing](#testing-instructions)

* [Questions](#questions)

## Installation

${data.installation}

## Usage:

${data.usage}

## Licensing:

This application is covered under ${renderLicenseSection(data)}.

## Contributing:

${data.contributing}

## Testing Instructions:

${data.testing}

## Questions:

${data.questions}

Contact Me:

GitHub: https://github.com/${data.github}

Email: ${data.email}
`
};