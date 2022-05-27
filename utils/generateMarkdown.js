// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  return `![license](https://img.shields.io/badge/license-${license}-blueviolet.png)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#instructions)
  - [Usage](#usage)
  - [Credits](#contributors)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contributors}

  ## License

  ${renderLicenseBadge(data.license)}

  ## Tests
  ${data.tests}
  
  ### Questions
  For inquiries please contact me via email or reach out on Github:
  * Email: ${data.email}
  * Github: ${data.username}
  `;
}

module.exports = generateMarkdown;
