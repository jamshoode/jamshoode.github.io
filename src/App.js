import React from 'react';

import './scss/App.scss';
import Home from './Home';
import Contact from './Contact';
import About from './About'
import Particles from 'react-particles-js';

import { AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <header>
          <div className="header__inner">
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <div className="logo">Taras Khanchuk</div>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </header>
        <AnimatePresence>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
          </Switch>
        </AnimatePresence>
        
        <footer>
          <div className="footer__inner">
            <div className="copyrights">All right reserved.</div>
            <a href="https://www.instagram.com/ivanovich._7/" className='insta'>
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>
          </div>
        </footer>
      </Router>
      <Particles params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 900,
              }
            },
            color: {
              value: '#B5B5B5'
            },
            opacity: {
              value: 1,
              anim: {
                  enable: true
              }
            },
            move: {
              speed: .3,
            },
            line_linked: {
              enable: false,
            },
            size: {
              value: 2.5,
            },
          }
        }} className='background'/>
    </div>
  );
}

export default App;
