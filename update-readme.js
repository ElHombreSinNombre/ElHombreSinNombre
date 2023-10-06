
const fs = require('fs');
const fetch = require('node-fetch');

const username = 'ElHombreSinNombre';
const readmePath = 'README.md';

async function updateReadme() {
    const repositories = await fetchRepositories(username);
    const recentRepositories = repositories.slice(0, 3);
    const readmeContent = `
### Hi there 👋

I'm a passionate frontend developer with a strong background in building dynamic and user-friendly web applications. My expertise lies in harnessing the power of modern JavaScript frameworks like Vue.js and React.js to create immersive and responsive user interfaces.

## About Me

- 🚀 Frontend Developer with 5 years of experience.
- 💡 Proficient in Vue.js and React.js.
- 🎨 Skilled in crafting pixel-perfect UI/UX designs.
- 🔧 Experienced with frontend build tools and package managers.
- 🌐 Knowledgeable in web accessibility and best practices.
- 📱 Enthusiastic about creating mobile-responsive web applications.
- 📚 Always eager to learn and stay updated with the latest web technologies.

## My last projects

${recentRepositories.map(repo => `- [${repo.name}](${repo.html_url})`).join('\n')}

Happy coding! 🚀`;

    fs.writeFileSync(readmePath, readmeContent);
}

const fetchRepositories = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    return response.json();
}

updateReadme();
