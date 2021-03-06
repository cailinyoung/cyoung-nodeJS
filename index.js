// array of questions for user
const prompt = require('inquirer').createPromptModule()
const fs = require('fs')

// api
const api = require('./api.js')
const generateMarkdown = require('./generateMarkdown.js')

const writeToFile = (data) => {
    fs.writeFile("example.md", data, error => error ? console.error(error) : console.log("success"))
}

// API user ID name & repository 
const init = async _ => {
    let object = {}
    do {
        const { user, repo } = await prompt([
            {
                type: 'input',
                name: 'user',
                message: 'What is your GitHub user name?'
            },
            {
                type: 'input',
                name: 'repo',
                message: 'What is your repository name?'
            }
        ])

        object = await api.getUser(user, repo)
        if (!object) {
            console.error('Repo not found!')
        }
        else {
            console.log(`${object.fullName} found!`)
        }
    }
    while (!object)

    Object.assign(object, await prompt([

        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage description?'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the installation instructions?'
        },

        {
            type: 'input',
            name: 'contrib',
            message: 'Who are the contributors?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the tests?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter your email'
        }
    ]))

    writeToFile(await generateMarkdown(object))
}

init();
