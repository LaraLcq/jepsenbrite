
import React, { Component } from 'react';
import { appLogout } from './helpers';

export default class Logout extends Component {
  render() {
    appLogout();
    return (
      <p>Log out</p>
  )

  }

}
