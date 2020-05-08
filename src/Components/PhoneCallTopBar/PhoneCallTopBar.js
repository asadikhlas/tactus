import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Svg from '../../config/svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class PhoneCallTopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.toggleNewGroupModal
              ? this.props.toggleNewGroupModal()
              : this.props.navigation.navigate('SlideShowScreen')
          }>
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Svg.EndCallIcon />
          </View>
        </TouchableOpacity>
        {!this.props.isUserName && (
          <TouchableOpacity onPress={() => this.props.toggleViewContactModal()}>
            <View style={styles.flexerRow}>
              <Text style={styles.text}>Steffan</Text>
              <Icon name="microphone" size={30} />
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => this.props.toggleOverlay()}>
          <View style={styles.menu}>
            <Icon name="dots-horizontal" color="white" size={60} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row'
  },
  textBold: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    color: 'black',
    fontSize: 25
  },
  menu: {
    backgroundColor: '#919090',
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.6)',
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 30,
    paddingLeft: 30,
    zIndex: 23
  }
});

export default PhoneCallTopBar;
