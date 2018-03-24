import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-vr';

export default class PlanetInfo extends Component {
  render() {
    const { planet } = this.props;
    return (
      <View billboarding={'on'} style={styles.infoBanner}>
        <Text style={styles.name}>{planet.label}</Text>
        <Text style={styles.item}>Radius: {planet.radius}km</Text>
        <Text style={styles.item}>Mass: {planet.mass}kg</Text>
        <Text style={styles.item}>
          Distance from Sun: {planet.distance || '-'} km
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoBanner: {
    backgroundColor: 'white',
    width: 280,
    paddingBottom: 20,
    transform: [
      { translate: [-600, 300, -200] }
    ]
  },
  name: {
    color: '#d22',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 28
  },
  item: {
    color: '#333',
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 16
  }
});