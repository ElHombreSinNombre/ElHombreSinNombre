
const fs = require('fs');

const username = 'ElHombreSinNombre';
const readmePath = 'README.md';
const yearsOfExperience = new Date().getFullYear() - 2018;

async function updateReadme() {
    const repositories = await fetchRepositories(username);
    const readmeContent = `
### Hi there 👋

I'm a passionate frontend developer with a strong background in building dynamic and user-friendly web applications. My expertise lies in harnessing the power of modern JavaScript frameworks like Vue.js and React.js to create immersive and responsive user interfaces.

## About Me

- 🚀 Frontend Developer with ${yearsOfExperience} years of experience.
- 💡 Proficient in Vue.js and React.js.
- 🎨 Skilled in crafting pixel-perfect UI/UX designs.
- 🔧 Experienced with frontend build tools and package managers.

## My last projects

${repositories.map(repo => `- [${repo.name}](${repo.html_url})`).join('\n')}
Happy coding! 🚀`;
    fs.writeFileSync(readmePath, readmeContent);
}

const fetchRepositories = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&page=1&per_page=3`);
    return response.json();
}

updateReadme();
