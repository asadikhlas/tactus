import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import homeIcon from '../../assets/avatar.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeIcon = ({ navigation }) => {
  return (
    <TouchableOpacity>
      <View style={styles.iconWrapper}>
        <View style={styles.homeIcon}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyAccountMenu')}>
            <Image source={homeIcon} style={styles.avatar} />
          </TouchableOpacity>
          <View style={styles.wrenchIcon}>
            <Icon name="wrench" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    borderWidth: 5,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 110,
    width: 110,
    borderRadius: 100,
    backgroundColor: '#808080',
    position: 'relative',
    marginBottom: 10
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 100,
    height: 100
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
  }
});

export default HomeIcon;
