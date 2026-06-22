// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
    en: {
        'nav.home':             'Home',
        'nav.experience':       'Experience',
        'nav.projects':         'Projects',
        'hero.greeting':        "Hi, I'm Hande.",
        'hero.title':           'Fullstack .NET Developer student',
        'hero.storyBtn':        'My Story →',
        'hero.storyBtnClose':   'Close ✕',
        'hero.jedi':            'Am I the Jedi you are looking for? <br> Download my CV or contact me!',
        'story.label':          'The backstory',
        'story.heading':        'Why I Switched Careers',
        'story.subheading':     '(A Love Story Gone Wrong)',
        'story.p1':             'At 18, my family handed me a life plan: become a doctor or dentist. I picked dentist. How bad could teeth be?',
        'story.p2':             'Reader, teeth are bad.',
        'story.p3':             'Not the teeth themselves, it was the job. Same chair, same drill, same "open wide" every day. And you don\'t just fix teeth, you perform. Patient one wants brutal honesty. Patient two is terrified. Patient three wants a 45-minute lecture on their cavity. You become a different person for each one, sometimes all before lunch. By 5pm I had no idea who I was anymore.',
        'story.p4':             'So I hid in academia. A PhD in Endodontics. Root canals, but make it research. The problem? Dental healthcare moves at a glacial pace. We were still having passionate debates about which toothpaste is best, while in tech something new drops every week and you\'re already behind if you took a long weekend.',
        'story.p5':             'I did find one thing I loved: data analysis. Breaking models, fixing them, making numbers make sense. That felt suspiciously fun.',
        'story.quote':          'Eventually the thought arrived: what if I just did that? Without the teeth?',
        'story.p6':             'Some online courses later, enrolled in fullstack .NET, traded the drill for a keyboard, and replaced "open wide" with "it works on my machine."',
        'story.closing':        'Zero regrets. The teeth can find someone else.',
        'timeline.present':     'Present',
        'timeline.sep2025':     'September 2025',
        'timeline.may2024':     'May 2024',
        'timeline.aug2025':     'August 2025',
        'timeline.sep2019':     'September 2019',
        'timeline.jul2025':     'July 2025',
        'timeline.sep2014':     'September 2014',
        'timeline.jun2019':     'June 2019',
        'timeline.job1.title':  'Fullstack .NET Developer Student',
        'timeline.job2.title':  'Dental Nurse',
        'timeline.job2.place':  'Hägernäs Dental Clinic, Täby',
        'timeline.job3.title':  'PhD in Endodontics',
        'timeline.job3.place':  'Gazi University, Turkey',
        'timeline.job4.title':  'Dentistry Degree and Master\'s Degree',
        'timeline.job4.place':  'Baskent University, Turkey',
        'projects.activity':    'GitHub Activity',
        'projects.featured':    'Featured Repositories',
        'a11y.skip':            'Skip to content',
        'repos.loading':        'Loading projects…',
        'repos.error':          "Couldn't load projects right now.",
        'repos.rateLimit':      'GitHub is rate-limiting requests. Please try again in a few minutes.',
        'repos.retry':          'Try again',
        'repos.viewCode':       'View Code →',
        'repos.noDesc':         'No description provided.',
    },
    sv: {
        'nav.home':             'Hem',
        'nav.experience':       'Erfarenhet',
        'nav.projects':         'Projekt',
        'hero.greeting':        'Hej, jag heter Hande.',
        'hero.title':           'Fullstack .NET-utvecklarstudent',
        'hero.storyBtn':        'Min historia →',
        'hero.storyBtnClose':   'Stäng ✕',
        'hero.jedi':            'Är jag den Jedi du letar efter? <br> Ladda ner mitt CV eller kontakta mig!',
        'story.label':          'Bakgrunden',
        'story.heading':        'Varför jag bytte karriär',
        'story.subheading':     '(En kärlekshistoria som gick snett)',
        'story.p1':             'Vid 18 fick jag en livslång plan av min familj: bli läkare eller tandläkare. Jag valde tandläkare. Hur illa kan tänder vara?',
        'story.p2':             'Kära läsare, tänder är illa.',
        'story.p3':             'Inte tänderna i sig, det var jobbet. Samma stol, samma borr, samma "öppna munnen" varje dag. Och det handlar inte bara om att laga tänder, det handlar om att prestera. Patient ett vill ha rak kommunikation. Patient två är livrädd. Patient tre vill ha en 45-minuters föreläsning om sin karies. Du blir en annan person för var och en, ibland allt innan lunch. Vid 17-tiden visste jag inte längre vem jag var.',
        'story.p4':             'Så jag gömde mig i akademin. En doktorsexamen i endodonti. Rotfyllningar, fast som forskning. Problemet? Tandvården rör sig i glacialtakt. Vi hade fortfarande heta debatter om vilken tandkräm som är bäst, medan det inom tech dyker upp något nytt varje vecka och du redan halkat efter om du tog en lång helg.',
        'story.p5':             'Jag hittade dock en sak jag verkligen älskade: dataanalys. Bryta modeller, fixa dem, få siffror att ge mening. Det kändes misstänkt roligt.',
        'story.quote':          'Till slut dök tanken upp: tänk om jag bara gjorde det? Utan tänderna?',
        'story.p6':             'Några onlinekurser senare, nu studerar jag fullstack .NET, bytte borren mot ett tangentbord och "öppna munnen" mot "det fungerar på min dator".',
        'story.closing':        'Inga ångrar. Tänderna får hitta någon annan.',
        'timeline.present':     'Nu',
        'timeline.sep2025':     'September 2025',
        'timeline.may2024':     'Maj 2024',
        'timeline.aug2025':     'Augusti 2025',
        'timeline.sep2019':     'September 2019',
        'timeline.jul2025':     'Juli 2025',
        'timeline.sep2014':     'September 2014',
        'timeline.jun2019':     'Juni 2019',
        'timeline.job1.title':  'Fullstack .NET-utvecklarstudent',
        'timeline.job2.title':  'Tandsköterska',
        'timeline.job2.place':  'Hägernäs Tandläkarklinik, Täby',
        'timeline.job3.title':  'Doktorsexamen i endodonti',
        'timeline.job3.place':  'Gazi universitetet, Turkiet',
        'timeline.job4.title':  'Tandläkarexamen och masterexamen',
        'timeline.job4.place':  'Baskent universitetet, Turkiet',
        'projects.activity':    'GitHub-aktivitet',
        'projects.featured':    'Utvalda projekt',
        'a11y.skip':            'Hoppa till innehåll',
        'repos.loading':        'Laddar projekt…',
        'repos.error':          'Kunde inte ladda projekt just nu.',
        'repos.rateLimit':      'GitHub begränsar förfrågningar. Försök igen om några minuter.',
        'repos.retry':          'Försök igen',
        'repos.viewCode':       'Visa kod →',
        'repos.noDesc':         'Ingen beskrivning angiven.',
    }
};

// Respect the OS "reduce motion" preference for all JS-driven motion.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Escape user/API-supplied strings before injecting them as HTML.
function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
}

let currentLang = 'en';

function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Update story button text if story is open
    const storyBtn = document.getElementById('storyBtn');
    // Swap CV download link
    const cvLink = document.querySelector('.social-link-cv');
    if (cvLink) {
        cvLink.href = lang === 'sv' ? 'assets/HandeBenguCV_SV.pdf' : 'assets/HandeBenguCV_EN.pdf';
    }

    const storySection = document.getElementById('storySection');
    if (storySection.style.display === 'block') {
        storyBtn.textContent = t['hero.storyBtnClose'];
    }

    // Highlight active button
    document.querySelectorAll('.langBtn').forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });

    // Re-render the repo chrome (e.g. "View Code") in the new language.
    renderProjects();
}

// Language buttons
document.querySelectorAll('.langBtn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});


// ============================================================
// STORY TOGGLE
// ============================================================
document.getElementById('storyBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.getElementById('storySection');
    const isHidden = section.style.display === 'none' || section.style.display === '';
    const t = translations[currentLang];
    this.innerHTML = isHidden ? t['hero.storyBtnClose'] : t['hero.storyBtn'];
    this.setAttribute('aria-expanded', String(isHidden));

    if (isHidden) {
        section.style.display = 'block';
        if (!reduceMotion.matches && section.animate) {
            section.animate(
                [{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }],
                { duration: 460, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
            );
        }
        section.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
    } else if (!reduceMotion.matches && section.animate) {
        // exit is quicker than entrance (~75% feel), then unmount
        const anim = section.animate(
            [{ opacity: 1 }, { opacity: 0, transform: 'translateY(8px)' }],
            { duration: 200, easing: 'cubic-bezier(0.25, 1, 0.5, 1)' }
        );
        anim.onfinish = () => { section.style.display = 'none'; };
    } else {
        section.style.display = 'none';
    }
});


// ============================================================
// TECH STACK TICKER
// ============================================================
const techStack = document.getElementById('techStack');
const techStackContainer = document.querySelector('.techStackContainer');

// Marquee is decorative motion — only run it when motion is welcome.
if (!reduceMotion.matches) {
    const items = Array.from(techStack.children);
    const stackWidth = techStack.scrollWidth;
    const containerWidth = techStackContainer.offsetWidth;
    const duplicates = Math.ceil(containerWidth / stackWidth) + 3;

    for (let i = 0; i < duplicates; i++) {
        items.forEach(item => techStack.appendChild(item.cloneNode(true)));
    }

    let stackPosition = 0;
    const stackSpeed = 0.5;
    let stackRAF = null;
    // Measure the loop point once — content is static, so scrollWidth never changes.
    // (Reading it inside the frame loop forces a layout every frame.)
    const halfWidth = techStack.scrollWidth / 2;

    function slideTechStack() {
        stackPosition -= stackSpeed;
        if (Math.abs(stackPosition) >= halfWidth) stackPosition = 0;
        techStack.style.transform = `translateX(${stackPosition}px)`;
        stackRAF = requestAnimationFrame(slideTechStack);
    }

    function startTicker() { if (stackRAF === null) slideTechStack(); }
    function stopTicker()  { if (stackRAF !== null) { cancelAnimationFrame(stackRAF); stackRAF = null; } }

    // Don't burn frames while the tab is in the background.
    document.addEventListener('visibilitychange', () => {
        document.hidden ? stopTicker() : startTicker();
    });

    startTicker();
}


// ============================================================
// WALKER ANIMATION
// ============================================================
const walker = document.querySelector('.timelineWalker');
const timelineWrapper = document.querySelector('.timelineWrapper');
const timelineItems = document.querySelectorAll('.timelineItem');
const walkerSpeed = 0.4;
let topPosition, minY, maxY, walkerHeight = 0, walkerRAF = null;

// All layout reads happen here (once on load / resize), never inside the frame loop.
function recalcBounds() {
    const wrapperRect = timelineWrapper.getBoundingClientRect();
    const itemRects = Array.from(timelineItems).map(i => i.getBoundingClientRect());
    minY = Math.min(...itemRects.map(r => r.top)) - wrapperRect.top;
    maxY = Math.max(...itemRects.map(r => r.bottom)) - wrapperRect.top;
    walkerHeight = walker.offsetHeight;
}

function animateWalker() {
    topPosition -= walkerSpeed;
    if (topPosition < minY - walkerHeight) topPosition = maxY;
    // transform (compositor-only) instead of `top` (layout) — no reflow per frame
    walker.style.transform = `translate(-50%, ${topPosition}px)`;
    walkerRAF = requestAnimationFrame(animateWalker);
}

function startWalker() { if (walkerRAF === null) animateWalker(); }
function stopWalker()  { if (walkerRAF !== null) { cancelAnimationFrame(walkerRAF); walkerRAF = null; } }

// The walking figure is purely decorative; skip it entirely under reduced motion.
if (walker && !reduceMotion.matches) {
    window.addEventListener('load', () => {
        recalcBounds();
        topPosition = maxY;
        startWalker();
    });

    // rAF-coalesce resize so a burst of events triggers one measurement, not dozens.
    let resizeQueued = false;
    window.addEventListener('resize', () => {
        if (resizeQueued) return;
        resizeQueued = true;
        requestAnimationFrame(() => { recalcBounds(); resizeQueued = false; });
    });

    document.addEventListener('visibilitychange', () => {
        document.hidden ? stopWalker() : startWalker();
    });
}


// ============================================================
// GITHUB REPOS
// ============================================================
const username = 'handecodes';

const deployedProjects = {
    'UnstuckApp':    { screenshot: 'images/screenshots/unstuck.png',      desc: 'AI-powered task breakdown for ADHD — turns overwhelming goals into tiny manageable steps', lang: 'C# / React',      langClass: 'cs' },
    'Photo_Gallery': { screenshot: 'images/screenshots/photogallery.png', desc: 'Responsive photo gallery with category filtering and lightbox viewing',                       lang: 'JavaScript',      langClass: 'js' },
    'PortfolioPage': { screenshot: 'images/screenshots/portfolio.png',    desc: 'This page — personal developer portfolio with animated timeline and GitHub activity',         lang: 'HTML / CSS / JS', langClass: 'html' },
};

const terminalPreviews = {
    'BankProjekt':               ['$ dotnet run BankProjekt', '&gt; Account created: #4821', '&gt; Deposit: 5000 SEK', '&gt; Balance: 5000.00 SEK', '&gt; Withdraw: 200 SEK', '&gt; Balance: 4800.00 SEK'],
    'LibraryDB':                 ['$ dotnet run LibraryDB', '&gt; Connected to database', '&gt; Books found: 142', '&gt; Search: "Dune"', '&gt; Result: Frank Herbert, 1965'],
    'ContactCatalog':            ['$ dotnet run ContactCatalog', '&gt; Contacts loaded: 38', '&gt; Search: "Anna"', '&gt; Found: Anna Lindqvist', '&gt; Email: anna@mail.se'],
    'OrbitalTransferCalculator': ['$ dotnet run OrbitalCalc', '&gt; Enter orbit altitude (km): 400', '&gt; Target altitude (km): 35786', '&gt; Delta-v: 3.93 km/s', '&gt; Transfer time: 5.3h'],
    'Calculator':                ['$ dotnet run Calculator', '&gt; Enter expression:', '&gt; 42 * 3.14', '&gt; = 131.88', '&gt; sqrt(144)', '&gt; = 12'],
};

function getLangClass(lang) {
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
    return `<div class="repo-thumb repo-terminal"><div class="terminal-bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span></div>${lineHTML}</div>`;
}

function buildScreenshotThumb(src, name) {
    return `<div class="repo-thumb"><img src="${escapeHTML(src)}" alt="${escapeHTML(name)} screenshot" loading="lazy" decoding="async"></div>`;
}

// Project shown manually (group repo, not under this account).
const timerCard = {
    name: 'Timer App',
    url: 'https://github.com/BwunLevain/Timelog-App',
    thumbHTML: buildScreenshotThumb('images/screenshots/timer.png', 'Timer App'),
    desc: 'Group project — a collaborative timer application built together with classmates',
    lang: 'JavaScript',
    langClass: 'js'
};

// Single source of truth for the projects section so we can re-render on
// language change without re-fetching, and show clear loading/error states.
const projectsState = { status: 'loading', items: [], errorKey: 'repos.error' };

function renderProjects(animate = false) {
    const grid = document.getElementById('repo-grid');
    if (!grid) return;
    const t = translations[currentLang];

    if (projectsState.status === 'loading') {
        grid.setAttribute('aria-busy', 'true');
        grid.innerHTML = Array.from({ length: 6 }).map(() =>
            `<div class="repo-skeleton" aria-hidden="true"><div class="sk-thumb"></div>` +
            `<div class="sk-body"><div class="sk-line w90"></div><div class="sk-line w60"></div>` +
            `<div class="sk-line w40"></div></div></div>`
        ).join('') +
        `<p class="repo-status" role="status">${escapeHTML(t['repos.loading'])}</p>`;
        return;
    }

    grid.setAttribute('aria-busy', 'false');

    if (projectsState.status === 'error') {
        grid.innerHTML =
            `<div class="repo-status" role="alert">` +
            `<p>${escapeHTML(t[projectsState.errorKey] || t['repos.error'])}</p>` +
            `<button type="button" class="repo-retry">${escapeHTML(t['repos.retry'])}</button>` +
            `</div>`;
        grid.querySelector('.repo-retry').addEventListener('click', loadProjects);
        return;
    }

    grid.innerHTML = projectsState.items.map((item, i) => {
        const desc = item.desc || t['repos.noDesc'];
        const lang = item.lang || 'Code';
        const inner = `${item.thumbHTML}<div class="repo-card-body">` +
            `<h3>${escapeHTML(item.name)}</h3>` +
            `<p>${escapeHTML(desc)}</p>` +
            `<div class="repo-card-footer">` +
            `<span class="repo-lang ${escapeHTML(item.langClass || '')}">${escapeHTML(lang)}</span>` +
            `<a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer" class="repo-link">${escapeHTML(t['repos.viewCode'])}</a>` +
            `</div></div>`;
        const cls = animate ? 'repo-card repo-card--enter' : 'repo-card';
        const style = animate ? ` style="--i:${i}"` : '';
        return `<div class="${cls}"${style}>${inner}</div>`;
    }).join('');
}

async function loadProjects() {
    const order = ['UnstuckApp', 'Photo_Gallery', 'PortfolioPage', 'BankProjekt', 'LibraryDB', 'ContactCatalog', 'OrbitalTransferCalculator', 'Calculator'];

    projectsState.status = 'loading';
    renderProjects();

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!response.ok) {
            // 403/429 from GitHub's unauthenticated rate limit is the common real-world failure.
            projectsState.status = 'error';
            projectsState.errorKey = (response.status === 403 || response.status === 429)
                ? 'repos.rateLimit' : 'repos.error';
            renderProjects();
            return;
        }

        const allRepos = await response.json();
        if (!Array.isArray(allRepos)) throw new Error('Unexpected API response');

        const repoMap = {};
        allRepos.forEach(r => repoMap[r.name] = r);

        const items = [timerCard];
        order.forEach(name => {
            const repo = repoMap[name];
            if (!repo) return;

            const deployed = deployedProjects[name];
            const terminal = terminalPreviews[name];
            items.push({
                name: repo.name,
                url: repo.html_url,
                thumbHTML: deployed
                    ? buildScreenshotThumb(deployed.screenshot, name)
                    : buildTerminalThumb(terminal || ['$ ' + name]),
                desc: deployed ? deployed.desc : (repo.description || ''),
                lang: deployed ? deployed.lang : (repo.language || ''),
                langClass: deployed ? deployed.langClass : getLangClass(repo.language)
            });
        });

        projectsState.items = items;
        projectsState.status = items.length ? 'ready' : 'empty';
        if (projectsState.status === 'empty') { projectsState.status = 'error'; projectsState.errorKey = 'repos.error'; }
        renderProjects(projectsState.status === 'ready');

    } catch (error) {
        projectsState.status = 'error';
        projectsState.errorKey = 'repos.error';
        renderProjects();
    }
}

loadProjects();


// ============================================================
// SCROLL-DRIVEN MOTION (IntersectionObserver — no scroll listeners)
// ============================================================

// Sticky-nav gains elevation once the page scrolls past the very top.
(() => {
    const sentinel = document.getElementById('topSentinel');
    const header = document.querySelector('header');
    if (sentinel && header && 'IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
            header.classList.toggle('scrolled', !entry.isIntersecting);
        }).observe(sentinel);
    }
})();

// Timeline items reveal as they enter view — a real ordered sequence, not a
// blanket section fade. Classes are added here so no-JS visitors see them as-is.
(() => {
    if (reduceMotion.matches || !('IntersectionObserver' in window)) return;
    const items = document.querySelectorAll('.timelineItem');
    if (!items.length) return;
    items.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
    items.forEach(el => io.observe(el));
})();