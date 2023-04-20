import { Navbar } from './Components/Navbar.js';
import { Partners } from './Components/Partners.js';
import { Footer } from './Components/Footer.js';

const navContainer = document.getElementById('main-nav');

navContainer.innerHTML = Navbar;

const programs = [
  {
    title: 'Lecture',
    text: 'Listen to the speakers from various countries about the messages of sharing and opening.',
    icon: 'assets/icons/lecture.png',
  },
  {
    title: 'CC Exhibition',
    text: 'Appreciate various creations applying CC license of artists, organized from Art Center Nabi',
    icon: 'assets/icons/exhibition.png',
  },
  {
    title: 'Forum',
    text: 'Have the time to share your thoughts and opinions with experts for each topic.',
    icon: 'assets/icons/forum.png',
  },
  {
    title: 'Workshop',
    text: 'Try creating your own work using open source license rather than just watching at it.',
    icon: 'assets/icons/workshop.png',
  },
  {
    title: 'CC Ignite',
    text: 'get opportunities to network with CC affiliates around the world, also after the summit.',
    icon: 'assets/icons/ignite.png',
  },
];
const programsContainer = document.getElementById('programs-container');

programs.map((program) => {
  const { title, text, icon } = program;

  const programBox = document.createElement('div');
  programBox.classList.add('row', 'py-2', 'mx-auto', 'program-box', 'w-100');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('col-3', 'mx-auto', 'col-md-12', 'text-center');

  const imgIcon = document.createElement('img');
  imgIcon.setAttribute('src', icon);

  imgContainer.appendChild(imgIcon);

  const pTitle = document.createElement('p');
  pTitle.classList.add('col-3', 'col-md-12', 'm-auto', 'text-center');
  pTitle.style.color = '#ec5242';
  pTitle.textContent = title;

  const pDescrip = document.createElement('p');
  pDescrip.classList.add('col-6', 'col-md-12', 'm-auto', 'text-white', 'text-md-center', 'program-text');
  pDescrip.textContent = text;

  programBox.append(imgContainer, pTitle, pDescrip);
  return programsContainer.appendChild(programBox);
});

const speakers = [
  {
    name: 'Yochai Benkler', position: 'Senior Software Developer with more than 15 years experience', description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006', photo: 'assets/images/speakers/Yochai Benkler.png',
  },
  {
    name: 'SohYeong Noh', position: 'Software Architect and Team Lead at Google', description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.', photo: 'assets/images/speakers/SohYeong Noh.png',
  },
  {
    name: 'Lila tretikov', position: 'Executive Director of the Wikipedia Foundation', description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.', photo: 'assets/images/speakers/Lila tretikov.png',
  },
  {
    name: 'Kilnam Chon', position: 'CEO and Founder of Technotion org', description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame', photo: 'assets/images/speakers/Kilnam Chon.png',
  },
  {
    name: 'Julia Leda', position: 'President of Red Hat organization', description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July', photo: 'assets/images/speakers/Julia Leda.png',
  },
  {
    name: 'Ryan Merkley', position: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment', description: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation', photo: 'assets/images/speakers/Ryan Merkley.png',
  }];

const speakerContainer = document.getElementById('speakers-container');

speakers.map((speaker, i) => {
  const {
    name, position, description, photo,
  } = speaker;

  const speakerBox = document.createElement('div');
  speakerBox.classList.add('row', 'col-12', 'col-md-5', 'mx-auto', 'speaker-box', 'my-3', 'mx-md-0', 'px-md-0');

  const data = `<div class="col-4">
                  <img class="speaker-img" src="${photo}" alt="${name}" />
                </div>
                <div class="col-8">
                  <div class="d-flex flex-column gap-1">
                    <h5 class="fw-bold speaker-name">
                      ${name}
                    </h5>
                    <p class="speaker-position m-md-auto">${position}</p>
                    <hr class="speaker-hr mt-0 mb-2">
                    <p class="speaker-desc m-auto">${description}</p>
                  </div>
                </div>`;
  speakerBox.innerHTML = data;
  if (i > 1) speakerBox.classList.add('more', 'hidden');
  return speakerContainer.append(speakerBox);
});

let viewController = false;
const moreBtn = document.getElementById('view-more');
moreBtn.addEventListener('click', () => {
  const boxes = document.querySelectorAll('.speaker-box');
  if (!viewController) {
    boxes.forEach((box) => {
      if (box.classList.value.includes('more')) box.classList.remove('hidden');
    });
    moreBtn.innerHTML = 'LESS <i class="active fa-solid fa-angle-up"></i>';
    viewController = true;
    return;
  }
  boxes.forEach((box) => {
    if (box.classList.value.includes('more')) box.classList.add('hidden');
  });
  moreBtn.innerHTML = 'MORE <i class="active fa-solid fa-angle-down"></i>';
  viewController = false;
});

const partnersContainer = document.getElementById('partners');
partnersContainer.innerHTML = Partners;

const footerContainer = document.getElementById('footer');
footerContainer.innerHTML = Footer;