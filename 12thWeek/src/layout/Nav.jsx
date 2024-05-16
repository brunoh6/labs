import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import calculation from '../images/calculation.svg';
import measering from '../images/measering.svg';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.navList}>
        <li><Link to="/Services" className={styles.navLink}>Services</Link></li>
        <li><Link to="/Products" className={styles.navLink}>Products</Link></li>
        <li><Link to="/AboutUs" className={styles.navLink}>About Us</Link></li>
        <li><Link to="/Portfolio" className={styles.navLink}>Portfolio</Link></li>
        <li><Link to="/FAQ" className={styles.navLink}>FAQ</Link></li>
        <li><Link to="/Contacts" className={styles.navLink}>Contacts</Link></li>
      </ul>
      <div className={styles.containerbtn}>
        <Link to="/make-request" className={`${styles.btn} ${styles.requestbtn}`}>
          <img src={measering} alt="Make Request" className={styles.icon} /> Make request
        </Link>
        <Link to="/calculation" className={`${styles.btn} ${styles.calculationbtn}`}>
          <img src={calculation} alt="Calculation" className={styles.icon} /> Calculation
        </Link>
      </div>
    </nav>
  );
};

export default Nav;