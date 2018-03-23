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
import PlanetInfo from './components/info';

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
        <Scene style={styles.scene} />
        <Pano source={asset('starfield.png')} />
        <AmbientLight intensity={1} />
        <DirectionalLight intensity={0.3} style={{ color: '#fff', transform: [{ rotateX: '80deg' }] }} />

        <Planet planet={planet} />
        <PlanetSelector 
          planets={planetData} 
          selected={planet.name} 
          onSelect={this.onSelect} 
        />
        <PlanetInfo planet={planet} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: '#000',
    transform: [{ translate: [0, 0, 300] }]
  }
});