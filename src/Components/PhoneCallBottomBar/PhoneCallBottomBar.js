import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class PhoneCallBottomBar extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={{ height: '100%' }}>
          <View style={styles.container}>
            <View style={styles.flexer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('TwoPeoplePhoneCallScreen')} >
                <View style={styles.iconWrapper} >
                  <Icon name="camcorder-off" color="red" size={60} />
                  <Text style={styles.textBold}>Turn camera on</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  homeIcon: {
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 110,
    width: 110,
    borderRadius: 100,
    position: 'relative'
  },
  iconWrapper: {
    backgroundColor: '#158725',
    width: 'auto',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    zIndex: 30
  },
  avatar: {
    width: 100,
    height: 100
  },
  withOutBackground: {
    height: 140,
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  container: {
    height: 100,
    bottom: 0,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  textBold: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },

  text: {
    color: 'white',
    fontSize: 20,
    maxWidth: '85%',
    marginLeft: 10
  },
  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%'
  }
});

export default PhoneCallBottomBar;
