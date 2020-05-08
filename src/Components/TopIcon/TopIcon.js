import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Svg from '../../config/svg';

const TopIcon = ({ navigation }) => {
  return (
    <View style={styles.iconWrapper}>
      <TouchableOpacity
        style={{ zIndex: 10 }}
        onPress={() => navigation.navigate('GetInTouch')}>
        <View style={styles.phoneIcon}>
          <Svg.PhoneIcon height={40} width={40} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    left: 10
  },
  wrenchIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -12
  },
  phoneIcon: {
    borderWidth: 3,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#3448FF'
  }
});

export default TopIcon;
