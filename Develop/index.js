// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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
        name: 'instructions',
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
        type: 'checkbox',
        name: 'license',
        message: 'Choose your project license (Required)',
        choices: ['Apache', 'Apache 2', 'MIT License', 'BSD', 'GPL'],
        validate: licenseInput => {
          if (licenseInput) {
            return true;
          } else {
            console.log('Please choose a project license!');
            return false;
          }
        }
      }
    ]);
};

const promptInfo = userInfo => {
// If there's no 'data' array property, create one
    if (!userInfo.data) {
      userInfo.data = [];
    }
    return inquirer
      .prompt([
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
    },
    ])
    .then(userInfo => {
        userInfo.data.push(userInfo);
        if (userInfo.confirmAddUserInfo) {
          return promptProject(userInfo);
        } else {
          return userInfo;
        }
    });
};
// TODO: Create a function to write README file
promptInfo()
  .then(promptUser)
  .then(userInfo => {
  return generatePage(userInfo);
  })
  .then(fileName => {
    return writeFile(fileName, data);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
