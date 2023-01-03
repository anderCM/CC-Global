import { Navbar } from './Components/Navbar.js';
import { Footer } from './Components/Footer.js';

const navContainer = document.getElementById('main-nav');
navContainer.innerHTML = Navbar;

const footerContainer = document.getElementById('footer');
footerContainer.innerHTML = Footer;