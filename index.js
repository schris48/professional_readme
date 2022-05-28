// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter a title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions (Required)',
        validate: instructionsInput => {
          if (instructionsInput) {
            return true;
          } else {
            console.log('Please enter installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter project use cases (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter the use cases for your project!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose your project license (Required)',
        choices: ['Apache', 'Apache2', 'MIT', 'BSD', 'GPL'],
        validate: licenseInput => {
          if (licenseInput) {
            return true;
          } else {
            console.log('Please choose a project license!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List any third-party creators that require attribution, including a link to their primary web presence. Any tutorials followed should also be linked here.'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run any tests you have written for your application.'
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your Github username? (Required)',
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log('Please enter your Github username!')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!')
            return false;
          }
        }
      }

  ]);
};

// Write README file
promptUser()
  .then(userInfo => {
  return generateMarkdown(userInfo);
  })
  .then(data => {
    return writeFile(data);
  })
  .catch(err => {
    console.log(err);
});

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./userREADME.md', fileContent, err => {

      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);

      // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};