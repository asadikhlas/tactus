import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import BackgroundImage from '../../assets/smaller.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../Components/Logo/logo';

class LoginScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={BackgroundImage} style={styles.image}>
        <View style={styles.container}>
          <View style={{ position: 'absolute', right: 10, top: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('StartupScreen')}>
              <View style={styles.replyIcon}>
                <Icon name="reply" color="#3B3B3B" size={50} />
              </View>
            </TouchableOpacity>
          </View>
          <Logo />
          <View style={styles.flexer}>
            <View style={styles.btnContainerStyle}>
              <TextInput style={styles.textField} placeholder="User ID" />
              <TextInput style={styles.textField} placeholder="Password" />
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={styles.btn}>
                  <Text style={styles.text}>Start</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 50 }}>
            <View style={styles.flexer}>
              <View style={styles.greyBtn}>
                <Text style={styles.text}>Forget password</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignupScreen')}>
                <View style={styles.btn}>
                  <Text style={styles.text}>New account</Text>
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
    justifyContent: 'center'
  },
  btnContainerStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center'
  },
  textField: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 15,
    color: '#9E9E9E',
    fontSize: 20,
    paddingLeft: 30,
    marginTop: 20
  },
  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  btn: {
    paddingVertical: 15,
    width: 'auto',
    backgroundColor: '#009688',
    paddingHorizontal: 35,
    marginTop: 20,
    borderRadius: 8
  },
  greyBtn: {
    paddingVertical: 15,
    width: 'auto',
    backgroundColor: '#9E9E9E',
    paddingHorizontal: 35,
    marginTop: 20,
    borderRadius: 8,
    marginRight: 30
  },
  logoIconStyle: {
    height: 95,
    width: 80
  },
  flexerspaceAround: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  replyIcon: {
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LoginScreen;
