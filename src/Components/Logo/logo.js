import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LogoIcon from '../../assets/smallLogoIcon.png';

const Logo = () => {
  return (
    <View style={styles.Wrapper}>
      <Image height="100%" source={LogoIcon} style={styles.logoIconStyle} />
      <View style={styles.flexerCol}>
        <Text style={styles.AppName}>Tactus</Text>
        <Text style={styles.SubText}>Stay in touch</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AppName: {
    fontWeight: 'bold',
    fontSize: 60,
    color: 'white',
    margin: 0,
    padding: 0
  },
  AppText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    marginLeft: 10
  },
  Wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  SubText: {
    fontSize: 30,
    color: 'white',
    marginTop: -15,
    marginLeft: 10
  },
  flexerCol: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoIconStyle: {
    height: 95,
    width: 80
  }
});

export default Logo;
