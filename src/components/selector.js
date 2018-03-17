import React, { Component } from 'react';
import {
  StyleSheet,
  VrButton,
  View,
  Text
} from 'react-vr';

export default class PlanetSelector extends Component {
  render() {
    const { planets, onSelect, selected } = this.props;
    return (
      <View billboarding={'on'} style={styles.menu}>
        {
          planets.map(planet => {
            const selectedClass = selected === planet.name && styles.selected;
            return (
              <VrButton key={planet.name} onClick={() => onSelect(planet)} style={[styles.btn, selectedClass]}>
                <Text style={styles.label}>
                  {planet.label}
                </Text>
              </VrButton>
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 250,
    transform: [
      { translate: [150, 100, 200] }
    ]
  },
  btn: {
    backgroundColor: '#fff',
    width: 100,
    padding: 10,
    marginRight: 1
  },
  label: {
    fontSize: 18,
    color: '#000'
  },
  selected: {
    backgroundColor: '#fc0'
  }
});