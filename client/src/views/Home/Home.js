import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Home.module.css';
import TopNav from '../../components/Nav/TopNav/TopNav';
import HomeIMG from '../../Home.jpg';
import Miles from '../../Miles2.jpg';

function Home () {
  const [hello, setHello] = useState('well hello')
  console.log(hello)
    return (
      <div className={styles.container}>
        <div className={styles.bgImg} />
        <div className={styles.content}>
          <h1 className={styles.title}>CITIZEN SIDEKICK</h1>
          <Link to="/signin">Sign in / sign up</Link>
        </div>
      </div>
    );
  }

export default Home;
