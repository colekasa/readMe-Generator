const inquirer = require("inquirer");
const fs = require("fs");

const generateReadMe = ({
  title,
  explanation,
  install,
  usage,
  license,
  email,
  github,
  image,
}) => {
  return `# ${title}


  ## Installation
  
  ${install}


## Usage

    ${usage}
    

## About the App

${explanation}


## License 
${license}


### Contacts 

Creators email: ${email}

 Github Reference: https://github.com/${github}

##Images

${image}`
};

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your application?",
      name: "title",
    },
    {
      type: "input",
      message: "Tell me about your application.",
      name: "explanation",
    },
    {
      type: "input",
      message: "How do you install your application?",
      name: "install",
    },
    {
      type: "input",
      message: "How to use your application?",
      name: "usage",
    },
    {
      type: "list",
      message: "What license did you use?",
      name: "license",
      choices: ["MIT", "GPLv2", "Apache", "Other"],
    },
    {
      type: "input",
      message: "Name the contributors.",
      name: "contributors",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "github",
    },
    {
      type:"input",
      message:"Enter your relative path to the screenshot of your application here.",
      name:"image",
    },
  ])

  .then((response) => {
    const readMe = generateReadMe(response);

    fs.writeFile("README.md", readMe, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
