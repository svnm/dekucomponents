import React, { Component, PropTypes } from 'react';
import styles from './Header.css';
import CSSModules from 'react-css-modules'

@CSSModules(styles, { allowMultiple: true })
export default class Header extends Component {
  render () {
    return (
      <div styleName='header'>

        <img styleName='image' src='/deku-zelda.jpg'
             alt='copyright LinkofSkyWind http://linkofskywind.deviantart.com/art/Possessed-Wind-Link-and-Deku-Skyward-Link-347757288'
             title='LinkofSkyWind http://linkofskywind.deviantart.com/art/Possessed-Wind-Link-and-Deku-Skyward-Link-347757288' />

        <p styleName='description'>
          Search for any deku components on npm...
          make sure you include the
          <code styleName='light'>deku-component</code>
          keyword in your
          <code styleName='light'>package.json</code>
        </p>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }
}
