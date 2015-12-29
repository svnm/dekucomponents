import React, { Component, PropTypes } from 'react';
import styles from './Header.css';

function Header(props) {

  return (
    <div className={styles.header}>

      <h3 className={styles.deku}>        
          deku components
      </h3>

      <p className={styles.description}>
        Search for any deku components on npm... 
        make sure you include the 
        <code className={styles.dark}>deku-component</code> 
        keyword in your 
        <code className={styles.light}>package.json</code>
      </p>

    </div>
  )

}

export default Header
