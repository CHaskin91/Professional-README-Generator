// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  [![license]https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

  
`;
}

module.exports = generateMarkdown;
