// Returns a license badge based on which license is passed in. If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blueviolet.png)`
}

// Generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License

  ${renderLicenseBadge(data.license)}

  ## Credits
  ${data.credits}

  ## Tests
  ${data.tests}
  
  ### Questions
  For inquiries please reach out to me on Github or contact me via email:
  - Github: ${data.username}
  - Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
