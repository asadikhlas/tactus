import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

class BottomMessageOverlay extends Component {
  render() {
    const { message, avatar, toggleOverlay } = this.props;
    return (
      <TouchableOpacity>
        <View style={{ height: '100%' }}>
          <View style={message ? styles.container : styles.withOutBackground}>
            <View style={styles.iconWrapper}>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  width: '100%'
                }}>
                <View style={styles.homeIcon}>
                  <TouchableOpacity onPress={() => toggleOverlay()}>
                    <Image source={avatar} style={styles.avatar} />
                  </TouchableOpacity>
                </View>
                {message && (
                  <View>
                    <Text style={styles.text}>
                      <Text style={styles.textBold}>Lena: </Text>
                      {message}
                    </Text>
                  </View>
                )}
              </View>
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
    position: 'absolute',
    bottom: 10,
    left: 10
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
    height: 140,
    bottom: 0,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  textBold: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    color: 'white',
    fontSize: 20,
    maxWidth: '85%',
    marginLeft: 10
  }
});

export default BottomMessageOverlay;
