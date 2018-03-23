import React, { Component } from 'react';
import {
  View,
  Model,
  asset
} from 'react-vr';

export default class Planet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rotation: 0
    };
    this.lastUpdate = Date.now();
  }

  componentWillMount() {
    this.rotate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  // planet rotate animation
  rotate = () => {
    const now = Date.now();
    const delta = now - this.lastUpdate;
    const rotation = this.state.rotation + delta / 150;

    this.time++;

    this.lastUpdate = now;
    this.setState({ rotation });
    this.frameHandle = requestAnimationFrame(this.rotate);
  }

  render() {
    const { planet, x, z } = this.props;
    const { rotation } = this.state;
    return (
      <Model
        source={{ obj: asset(`${planet.name}.obj`) }}
        texture={asset(`${planet.name}.jpg`)}
        style={{ transform: [{ scale: 30 }] }}
      />
    );
  }
}