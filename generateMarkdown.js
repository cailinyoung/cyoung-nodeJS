const generateMarkdown = data => {
// return JSON.stringify(data)
return `
<a href="${data.link}" style="float:right"><img src="${data.avatar}" alt="${data.name}" title="${data.name}" width="120" height="120"></a>
# ${data.title.toUpperCase()}
![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/badge/License-${(data.lic) ? data.lic : 'None'}-brightgreen)

# Repo by ${data.name}
__${data.desc}__
---

# Installation:
${data.install}

# Usage:
${data.usage}

# Contributors:
${data.contrib}

# Tests:
${data.test}

# Contact info for further questions:
${data.questions}
`
}

module.exports = generateMarkdown