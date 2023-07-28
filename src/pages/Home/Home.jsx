import React from 'react';
import css from './Home.module.css';

const Home = () => (
  <div className={css.headerWrapper}>
    <p className={css.header}>Welcome to</p>
    <div className={css.waviy}>
      <span style={{ '--i': 1 }}>P</span>
      <span style={{ '--i': 2 }}>h</span>
      <span style={{ '--i': 3 }}>o</span>
      <span style={{ '--i': 4 }}>n</span>
      <span style={{ '--i': 5 }}>e</span>
      <span style={{ '--i': 6 }}>b</span>
      <span style={{ '--i': 7 }}>o</span>
      <span style={{ '--i': 8 }}>o</span>
      <span style={{ '--i': 9 }}>k</span>
    </div>
  </div>
);

export default Home;
