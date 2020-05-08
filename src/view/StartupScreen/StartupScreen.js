import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native';
import BackgroundImage from '../../assets/smaller.png';
import Logo from '../../Components/Logo/logo';

class StartupScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={BackgroundImage} style={styles.image}>
        <View style={styles.container}>
          <Logo />
          <View style={{ marginTop: 50, width: '100%' }}>
            <View style={styles.flexer}>
              <View style={styles.btn}>
                <Text style={styles.text}>New account</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <View style={styles.btn}>
                  <Text style={styles.text}>Sign in</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center'
  },
  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%'
  },
  btn: {
    paddingVertical: 15,
    width: 250,
    backgroundColor: '#009688',
    marginTop: 20,
    borderRadius: 8
  }
});

export default StartupScreen;
