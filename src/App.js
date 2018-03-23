import React, { Component } from 'react';
import {
  asset,
  Pano,
  View,
  Scene,
  AmbientLight,
  StyleSheet,
  DirectionalLight
} from 'react-vr';

import planetData from './data/planets';
import Planet from './components/planet';
import PlanetSelector from './components/selector';

export default class SolarSystem extends Component {
  constructor(props) {
    super(props);
    this.state = { planet: planetData[0] };
  }

  onSelect = (planet) => {
    this.setState({ planet });
  }

  render() {
    const { planet } = this.state;
    return (
      <View>
        {/* <Scene style={styles.scene} /> */}
        <Pano source={asset('starfield.png')} />
        <AmbientLight intensity={1} />
        {/* <DirectionalLight intensity={0.3} style={{ color: '#fff', transform: [{ rotateX: 80 }] }} /> */}

        <Planet planet={planetData[0]} x={0} z={-20} />
        <Planet planet={planetData[1]} x={-10} z={-17} />
        <Planet planet={planetData[2]} x={-15} z={-10} />
        <Planet planet={planetData[3]} x={-18} z={-1} />
        <Planet planet={planetData[4]} x={-15} z={8} />
        <Planet planet={planetData[5]} x={-10} z={15} />
        <Planet planet={planetData[6]} x={-1} z={18} />
        <Planet planet={planetData[7]} x={8} z={15} />
        <Planet planet={planetData[8]} x={12} z={16} />
        {/* <PlanetSelector planets={planetData} selected={planet.name} onSelect={this.onSelect} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: '#000',
    transform: [{ translate: [0, 0, 0] }]
  }
});