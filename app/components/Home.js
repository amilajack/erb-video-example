// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import video from './big_buck_bunny.mp4';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <video src={video} />
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
