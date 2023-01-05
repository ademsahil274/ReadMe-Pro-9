// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !=='None') {
    return `## License
    This Project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  # This is a Title
  
  ## Table of Contents
  - [GitHub](#GitHub)
  - [Email address](#Email)
  - [Title of the project](#Title)
  - [Project description](#Description)
  - [License](#License)
  - [Installation](#Installation)
  - [Test](#test)
  - [Usage](#Usage)
  - [Contributing](#Contributing)

  ## GitHub
  You can find more information (https://github.com/${data.github}/)

  ## Email
  If you need any help or question about the repo please email me at ${data.email}

  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## License
  ${data.license}

  ## Installation
  ${data.installation}

  ## Test
  ${data.test}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  `;
}

module.exports = generateMarkdown;
