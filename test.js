const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    // {
    //   type: 'input',
    //   message: 'What is the title of this project?',
    //   name: 'title',
    // },
    // {
    //   type: 'input',
    //   message: 'Enter description for this project.',
    //   name: 'description',
    // },
    // {
    //   type: 'input',
    //   message: 'Enter installation instructions.',
    //   name: 'installation',
    // },
    // {
    //     type: 'input',
    //     message: 'Usage Instructions.',
    //     name: 'usage',
    //   },
      {
        type: 'list',
        message: 'Choose license',
        name: 'license',
        choices:['MIT License', 'GNU General Public License v3.0', 'Mozilla Public License 2.0' ]
      },
//       {
//         type: 'input',
//         message: 'Instructions for contributing.',
//         name: 'contributing',
//       },
//       {
//         type: 'input',
//         message: 'Test instructions',
//         name: 'testing',
//       },
//       {
//         type: 'input',
//         message: 'Enter questions',
//         name: 'questions',
//       },
//       {
//         type: 'input',
//         message: 'Enter GitHub username',
//         name: 'github',
//       },
//       {
//         type: 'input',
//         message: 'Enter email',
//         name: 'email',
//       },
  ])


  .then((data) => {
console.log(data)

fs.writeFile('README.md', (createReadme(data)), (err) =>
err ? console.log(err) : console.log("Success!")
)
  });

  
  
  function renderLicenseBadge(data) {
    let licenseType = `${data.license}`
    let yourLicense = ''
    if (licenseType === 'MIT License') {
      yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (licenseType === 'GNU General Public License v3.0') {
      yourLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (licenseType === 'Mozilla Public License 2.0') {
       yourLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
    } 
    return yourLicense;
  };
   
  



function createReadme(data) {
  return  `
## license: ${renderLicenseBadge(data)}



`
};