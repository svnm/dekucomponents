import React, { Component, PropTypes } from 'react';
import styles from './Header.css';

function Header(props) {

  return (
    <div className={styles.header}>

      <img className={styles.image} src='/public/deku-zelda.jpg' 
           alt='copyright LinkofSkyWind http://linkofskywind.deviantart.com/art/Possessed-Wind-Link-and-Deku-Skyward-Link-347757288' 
           title='LinkofSkyWind http://linkofskywind.deviantart.com/art/Possessed-Wind-Link-and-Deku-Skyward-Link-347757288' />

      <p className={styles.description}>
        Search for any deku components on npm... 
        make sure you include the 
        <code className={styles.light}>deku-component</code> 
        keyword in your 
        <code className={styles.light}>package.json</code>
      </p>

    </div>
  )

}

export default Header
