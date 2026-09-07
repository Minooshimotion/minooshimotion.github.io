const projects = [
  {
    id: '01', title: 'Roll with Dracula | Mencherz Dice Promo', category: '3D Motion', client: 'Mencherz', year: '1405', role: 'Motion Designer', word: 'DRACULA', duration: '00:19', poster: './assets/projects/01-brle1gw.jpg', pageUrl: 'https://www.aparat.com/v/brle1gw', embedUrl: 'https://www.aparat.com/video/video/embed/videohash/brle1gw/vt/frame?titleShow=true',
    description: 'A dark, Dracula-themed promotional animation introducing a custom dice set for the Mencherz mobile game. Existing dice assets were developed into an atmospheric 3D piece focused on presentation, animation, and compositing.',
  },
  {
    id: '02', title: 'Coffee Brand | 3D Product Animation', category: '3D Motion', client: 'Coffee Brand', year: '1405', role: 'Motion Designer', word: 'COFFEE', duration: '00:08', poster: './assets/projects/02-hqdhl02.jpg', pageUrl: 'https://www.aparat.com/v/hqdhl02', embedUrl: 'https://www.aparat.com/video/video/embed/videohash/hqdhl02/vt/frame?titleShow=true',
    description: 'A stylized coffee-brand animation combining 3D product visuals with motion graphics in a short promotional piece. Created in Blender, with motion design and compositing in After Effects.',
  },
  {
    id: '03', title: 'A Little Nostalgia, Brought to Life | Nostalgic', category: 'Motion Design', client: 'Nostalgic Shop', year: '1405', role: 'Motion Designer', word: 'NOSTALGIA', duration: '00:07', poster: './assets/projects/03-nzqd210.jpg', pageUrl: 'https://www.aparat.com/v/nzqd210', embedUrl: 'https://www.aparat.com/video/video/embed/videohash/nzqd210/vt/frame?titleShow=true',
    description: 'A playful motion piece for Nostalgic, blending 3D elements and graphic animation to translate the shop’s nostalgic identity into movement. Created in After Effects.',
  },
  {
    id: '04', title: 'Cocoon to Butterfly | Logo Animation', category: 'Logo Motion', client: 'Clothes Brand', year: '1405', role: 'Motion Designer', word: 'COCOON', duration: '00:05', poster: './assets/projects/04-qvf1m2v.jpg', pageUrl: 'https://www.aparat.com/v/qvf1m2v', embedUrl: 'https://www.aparat.com/video/video/embed/videohash/qvf1m2v/vt/frame?titleShow=true',
    description: 'A logo animation built around transformation: a cocoon gradually evolves into a butterfly before revealing the final mark through a smooth visual transition.',
  },
  {
    id: '05', title: 'CrossFit Brand | Logo Motion', category: 'Motion Design', client: 'Gym Club', year: '1405', role: 'Motion Designer', word: 'CROSSFIT', duration: '00:12', poster: './assets/projects/05-wga09kp.jpg', pageUrl: 'https://www.aparat.com/v/wga09kp', embedUrl: 'https://www.aparat.com/video/video/embed/videohash/wga09kp/vt/frame?titleShow=true',
    description: 'A bold, high-energy logo animation for a CrossFit brand, using fast motion and impactful transitions to reflect strength, momentum, and intensity.',
  },
];

const projectGrid = document.querySelector('#project-grid');

projectGrid.innerHTML = projects
  .map(
    (project, index) => `
      <article class="project" data-reveal>
        <button
          class="project-card"
          type="button"
          data-project-id="${project.id}"
          data-scroll-depth="${index % 2 === 0 ? '1' : '-1'}"
          aria-label="Open ${project.title}, ${project.category}"
        >
          <img class="project-poster" src="${project.poster}" alt="" loading="lazy" decoding="async" />
          <span class="project-shade" aria-hidden="true"></span>
          <span class="project-number">/${project.id}</span>
          <span class="project-word" aria-hidden="true">${project.word}</span>
          <span class="project-play" aria-hidden="true"></span>
          <span class="project-format">16:9 · ${project.duration}</span>
        </button>
        <div class="project-meta">
          <div><h3>${project.title}</h3><p>${project.client}</p></div>
          <div><p>${project.category}</p><p>${project.year}</p></div>
        </div>
      </article>
    `,
  )
  .join('');

const projectModal = document.querySelector('#project-modal');
const mobileMenu = document.querySelector('#mobile-menu');
const modalTitle = document.querySelector('#modal-title');
const modalSubtitle = document.querySelector('#modal-subtitle');
const modalWord = document.querySelector('#modal-word');
const modalRole = document.querySelector('#modal-role');
const modalClient = document.querySelector('#modal-client');
const modalDescription = document.querySelector('#modal-description');
const modalFrame = document.querySelector('#modal-frame');
const modalPlaceholder = document.querySelector('#modal-placeholder');
const modalSource = document.querySelector('#modal-source');

function setPageLocked(locked) {
  document.body.style.overflow = locked ? 'hidden' : '';
}

let moveMotionCursor = () => {};

function openProject(project) {
  modalTitle.textContent = project.title;
  modalSubtitle.textContent = `${project.category} · ${project.year} · ${project.duration}`;
  modalRole.textContent = project.role;
  modalClient.textContent = project.client;
  modalDescription.textContent = project.description;
  modalSource.href = project.pageUrl;
  modalSource.hidden = false;
  modalPlaceholder.hidden = true;
  modalFrame.hidden = false;
  modalFrame.title = `${project.title} on Aparat`;
  modalFrame.src = project.embedUrl;
  projectModal.showModal();
  moveMotionCursor(projectModal);
  setPageLocked(true);
}

function openReel() {
  modalTitle.textContent = 'Showreel 2026';
  modalSubtitle.textContent = 'Motion design and editing reel';
  modalWord.textContent = 'REEL';
  modalRole.textContent = 'Motion design · Video editing';
  modalClient.textContent = 'Selected work';
  modalDescription.textContent = 'The showreel is still a placeholder and can be connected as soon as the final video is available.';
  modalSource.hidden = true;
  modalFrame.hidden = true;
  modalFrame.src = 'about:blank';
  modalPlaceholder.hidden = false;
  projectModal.showModal();
  moveMotionCursor(projectModal);
  setPageLocked(true);
}

projectGrid.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-project-id]');
  if (!trigger) return;
  const project = projects.find((item) => item.id === trigger.dataset.projectId);
  if (project) openProject(project);
});

document.querySelector('[data-open-reel]').addEventListener('click', openReel);
document.querySelector('[data-close-modal]').addEventListener('click', () => projectModal.close());
projectModal.addEventListener('close', () => {
  modalFrame.src = 'about:blank';
  moveMotionCursor(document.body);
  setPageLocked(false);
});

document.querySelector('#menu-trigger').addEventListener('click', () => {
  mobileMenu.showModal();
  moveMotionCursor(mobileMenu);
  setPageLocked(true);
});
document.querySelector('[data-close-menu]').addEventListener('click', () => mobileMenu.close());
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => mobileMenu.close()));
mobileMenu.addEventListener('close', () => {
  moveMotionCursor(document.body);
  setPageLocked(false);
});

[projectModal, mobileMenu].forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    const inside =
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom;
    if (!inside) dialog.close();
  });
});

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Form preview works — email delivery will be connected at launch.';
});

const root = document.documentElement;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

function setupMotionCursor() {
  if (!finePointer.matches || reducedMotion.matches) return;

  const trailLength = 4;
  const mainCursor = document.createElement('div');
  mainCursor.className = 'motion-cursor';
  mainCursor.setAttribute('aria-hidden', 'true');

  const ghosts = Array.from({ length: trailLength }, (_, index) => {
    const ghost = document.createElement('div');
    ghost.className = 'motion-cursor cursor-ghost';
    ghost.setAttribute('aria-hidden', 'true');
    ghost.style.setProperty('--ghost-opacity', String(0.14 - index * 0.025));
    ghost.style.setProperty('--ghost-scale', String(0.9 - index * 0.08));
    return ghost;
  });

  const fragment = document.createDocumentFragment();
  ghosts.forEach((ghost) => fragment.appendChild(ghost));
  fragment.appendChild(mainCursor);
  document.body.appendChild(fragment);
  document.body.classList.add('has-motion-cursor');

  moveMotionCursor = (container) => {
    ghosts.forEach((ghost) => container.appendChild(ghost));
    container.appendChild(mainCursor);
  };

  const target = { x: -100, y: -100 };
  const current = { x: -100, y: -100 };
  const ghostPositions = ghosts.map(() => ({ x: -100, y: -100 }));
  const cursorElements = [...ghosts, mainCursor];
  let active = false;

  function setPosition(element, position) {
    element.style.setProperty('--cursor-x', `${position.x}px`);
    element.style.setProperty('--cursor-y', `${position.y}px`);
  }

  function setVisible(visible) {
    active = visible;
    cursorElements.forEach((element) => element.classList.toggle('is-visible', visible));
  }

  function handlePointerMove(event) {
    target.x = event.clientX;
    target.y = event.clientY;

    if (!active) {
      current.x = target.x;
      current.y = target.y;
      ghostPositions.forEach((position) => {
        position.x = target.x;
        position.y = target.y;
      });
      setVisible(true);
    }

    const element = event.target instanceof Element ? event.target : null;
    const overWork = Boolean(element?.closest('#work, #project-modal'));
    cursorElements.forEach((cursor) => cursor.classList.toggle('is-camera', overWork));
  }

  function animateCursor() {
    current.x += (target.x - current.x) * 0.34;
    current.y += (target.y - current.y) * 0.34;
    setPosition(mainCursor, current);

    let leader = current;
    ghostPositions.forEach((position, index) => {
      const ease = 0.24 - index * 0.025;
      position.x += (leader.x - position.x) * ease;
      position.y += (leader.y - position.y) * ease;
      setPosition(ghosts[index], position);
      leader = position;
    });

    window.requestAnimationFrame(animateCursor);
  }

  document.addEventListener('pointermove', handlePointerMove, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => setVisible(false));
  document.documentElement.addEventListener('pointerenter', () => {
    if (target.x >= 0) setVisible(true);
  });
  document.addEventListener('pointerdown', () => mainCursor.classList.add('is-pressed'));
  document.addEventListener('pointerup', () => mainCursor.classList.remove('is-pressed'));
  window.addEventListener('blur', () => setVisible(false));
  animateCursor();
}

setupMotionCursor();
const depthElements = Array.from(document.querySelectorAll('[data-scroll-depth]'));
const sectionElements = Array.from(document.querySelectorAll('[data-scroll-section]'));
let animationFrame = 0;

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

function renderScrollEffects() {
  animationFrame = 0;
  const total = root.scrollHeight - window.innerHeight;
  root.style.setProperty('--scroll-progress', String(total > 0 ? window.scrollY / total : 0));

  const heroProgress = clamp(window.scrollY / Math.max(window.innerHeight, 1));
  const mobileScale = window.innerWidth <= 640 ? 0.55 : 1;
  root.style.setProperty('--hero-copy-y', `${heroProgress * 38 * mobileScale}px`);
  root.style.setProperty('--hero-title-x', `${heroProgress * -48 * mobileScale}px`);
  root.style.setProperty('--hero-accent-x', `${heroProgress * 82 * mobileScale}px`);
  root.style.setProperty('--hero-reel-y', `${heroProgress * -42 * mobileScale}px`);
  root.style.setProperty('--hero-reel-rotate', `${heroProgress * 1.8}deg`);
  root.style.setProperty('--hero-word-y', `${heroProgress * 72 * mobileScale}px`);
  root.style.setProperty('--hero-word-rotate', `${-90 + heroProgress * 18}deg`);

  if (reducedMotion.matches) return;

  depthElements.forEach((element) => {
    const bounds = element.getBoundingClientRect();
    const progress = clamp((window.innerHeight - bounds.top) / (window.innerHeight + bounds.height));
    const centered = (progress - 0.5) * 2;
    const direction = Number(element.dataset.scrollDepth || 1);
    element.style.setProperty('--depth-y', `${centered * 22 * direction * mobileScale}px`);
    element.style.setProperty('--word-drift', `${centered * 46 * direction * mobileScale}px`);
    element.style.setProperty('--depth-rotate', `${centered * 0.8 * direction}deg`);
  });

  sectionElements.forEach((element) => {
    const bounds = element.getBoundingClientRect();
    const progress = clamp((window.innerHeight - bounds.top) / (window.innerHeight + bounds.height));
    const centered = (progress - 0.5) * 2;
    element.style.setProperty('--section-progress', String(progress));
    element.style.setProperty('--reveal-stop', `${Math.round(progress * 118 - 9)}%`);
    element.style.setProperty('--contact-left-y', `${centered * 20 * mobileScale}px`);
    element.style.setProperty('--contact-right-y', `${centered * -20 * mobileScale}px`);
  });
}

function queueScrollEffects() {
  if (!animationFrame) animationFrame = window.requestAnimationFrame(renderScrollEffects);
}

const revealElements = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

renderScrollEffects();
window.addEventListener('scroll', queueScrollEffects, { passive: true });
window.addEventListener('resize', queueScrollEffects);
reducedMotion.addEventListener('change', queueScrollEffects);
