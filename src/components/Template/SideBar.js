import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      {/* in case I want to display a photo
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link> */}
      <header>
        <h2>Alan Matthew</h2>
        <p><a href="mailto:alan.matthew.anggara@gmail.com">alan.matthew.anggara@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Alan Mattew. I like building things.
        I am a computer science undergraduate, ex-trader at a hedge fund, and
        avid dota2 player.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alan Matthew <Link to="/">alnmathw.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
