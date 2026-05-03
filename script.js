// Tech stack animation
const techStack = document.getElementById('techStack');
const techStackContainer = document.querySelector('.techStackContainer');

const items = Array.from(techStack.children);
const stackWidth = techStack.scrollWidth;
const containerWidth = techStackContainer.offsetWidth;

let duplicates = Math.ceil(containerWidth / stackWidth) + 3;

for (let i = 0; i < duplicates; i++) {
  items.forEach(item => {
    techStack.appendChild(item.cloneNode(true));
  });
}

let stackPosition = 0;
const stackSpeed = 0.5;

function slideTechStack() {
    stackPosition -= stackSpeed;
    if (Math.abs(stackPosition) >= techStack.scrollWidth / 2) {
        stackPosition = 0;
    }
    techStack.style.transform = `translateX(${stackPosition}px)`;
    requestAnimationFrame(slideTechStack);
}

slideTechStack();


// Walker animation
const walker = document.querySelector('.timelineWalker');
const timelineWrapper = document.querySelector('.timelineWrapper');
const timelineItems = document.querySelectorAll('.timelineItem');
const walkerSpeed = 0.4;
let topPosition, minY, maxY;

function recalcBounds() {
    const wrapperRect = timelineWrapper.getBoundingClientRect();
    const itemRects = Array.from(timelineItems).map(i => i.getBoundingClientRect());
    minY = Math.min(...itemRects.map(r => r.top)) - wrapperRect.top;
    maxY = Math.max(...itemRects.map(r => r.bottom)) - wrapperRect.top;
}

function animateWalker() {
    topPosition -= walkerSpeed;
    if (topPosition < minY - walker.offsetHeight) {
        topPosition = maxY;
    }
    walker.style.top = `${topPosition}px`;
    requestAnimationFrame(animateWalker);
}

window.addEventListener('load', () => {
    recalcBounds();
    topPosition = maxY;
    animateWalker();
});

window.addEventListener('resize', recalcBounds);


// GitHub repos
const username = 'handechasacademy';

// Deployed projects — get a screenshot thumbnail
const deployedProjects = {
    'UnstuckApp':    { screenshot: 'images/screenshots/unstuck.png',      desc: 'AI-powered task breakdown for ADHD — turns overwhelming goals into tiny manageable steps', lang: 'C# / React',      langClass: 'cs' },
    'Photo_Gallery': { screenshot: 'images/screenshots/photogallery.png', desc: 'Responsive photo gallery with category filtering and lightbox viewing',                       lang: 'JavaScript',      langClass: 'js' },
    'PortfolioPage': { screenshot: 'images/screenshots/portfolio.png',    desc: 'This page — personal developer portfolio with animated timeline and GitHub activity',         lang: 'HTML / CSS / JS', langClass: 'html' },
};

// Console apps — get a terminal placeholder
const terminalPreviews = {
    'BankProjekt':              ['$ dotnet run BankProjekt', '&gt; Account created: #4821', '&gt; Deposit: 5000 SEK', '&gt; Balance: 5000.00 SEK', '&gt; Withdraw: 200 SEK', '&gt; Balance: 4800.00 SEK'],
    'LibraryDB':                ['$ dotnet run LibraryDB', '&gt; Connected to database', '&gt; Books found: 142', '&gt; Search: "Dune"', '&gt; Result: Frank Herbert, 1965'],
    'ContactCatalog':         ['$ dotnet run ContactCatalog', '&gt; Contacts loaded: 38', '&gt; Search: "Anna"', '&gt; Found: Anna Lindqvist', '&gt; Email: anna@mail.se'],
    'OrbitalTransferCalculator':['$ dotnet run OrbitalCalc', '&gt; Enter orbit altitude (km): 400', '&gt; Target altitude (km): 35786', '&gt; Delta-v: 3.93 km/s', '&gt; Transfer time: 5.3h'],
    'Calculator':               ['$ dotnet run Calculator', '&gt; Enter expression:', '&gt; 42 * 3.14', '&gt; = 131.88', '&gt; sqrt(144)', '&gt; = 12'],
};

function langClass(lang) {
    if (!lang) return '';
    const l = lang.toLowerCase();
    if (l.includes('c#')) return 'cs';
    if (l.includes('javascript')) return 'js';
    if (l.includes('html')) return 'html';
    if (l.includes('sql')) return 'sql';
    return '';
}

function buildTerminalThumb(lines) {
    const lineHTML = lines.map((l, i) => {
        const cls = i === 0 ? 'dim' : i % 2 === 0 ? '' : 'bright';
        return `<div class="terminal-line ${cls}">${l}</div>`;
    }).join('');
    return `
        <div class="repo-thumb repo-terminal">
            <div class="terminal-bar">
                <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
            </div>
            ${lineHTML}
        </div>`;
}

function buildScreenshotThumb(src, name) {
    return `
        <div class="repo-thumb">
            <img src="${src}" alt="${name} screenshot">
        </div>`;
}

async function loadProjects() {
    const grid = document.getElementById('repo-grid');
    const order = ['UnstuckApp', 'Photo_Gallery', 'PortfolioPage', 'BankProjekt', 'LibraryDB', 'ContactCatalog', 'OrbitalTransferCalculator', 'Calculator'];

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const allRepos = await response.json();

        const repoMap = {};
        allRepos.forEach(r => repoMap[r.name] = r);

        grid.innerHTML = '';
        addTimerCard()
        order.forEach(name => {
            const repo = repoMap[name];
            if (!repo) return;

            const deployed = deployedProjects[name];
            const terminal = terminalPreviews[name];

            const thumb = deployed
                ? buildScreenshotThumb(deployed.screenshot, name)
                : buildTerminalThumb(terminal || ['$ ' + name]);

            const desc = deployed ? deployed.desc : (repo.description || 'No description provided.');
            const lang = deployed ? deployed.lang : (repo.language || 'Code');
            const cls  = deployed ? deployed.langClass : langClass(repo.language);

            const card = document.createElement('div');
            card.className = 'repo-card';
            card.innerHTML = `
                ${thumb}
                <div class="repo-card-body">
                    <h3>${repo.name}</h3>
                    <p>${desc}</p>
                    <div class="repo-card-footer">
                        <span class="repo-lang ${cls}">${lang}</span>
                        <a href="${repo.html_url}" target="_blank" class="repo-link">View Code →</a>
                    </div>
                </div>`;
            grid.appendChild(card);
        });

    } catch (error) {
        grid.innerHTML = '<p>Error loading projects.</p>';
    }
}
function addTimerCard() {
    const grid = document.getElementById('repo-grid');
    const card = document.createElement('div');
    card.className = 'repo-card';
    card.innerHTML = `
        <div class="repo-thumb">
            <img src="images/screenshots/timer.png" alt="Timer App screenshot">
        </div>
        <div class="repo-card-body">
            <h3>Timer App</h3>
            <p>Group project - a collaborative timer application built together with classmates</p>
            <div class="repo-card-footer">
                <span class="repo-lang">JavaScript</span>
                <a href="https://github.com/BwunLevain/Timelog-App" target="_blank" class="repo-link">View Code →</a>
            </div>
        </div>`;
    grid.appendChild(card);
}

loadProjects();