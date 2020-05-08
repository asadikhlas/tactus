import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Overlay } from 'react-native-elements';
import Svg from '../../config/svg';
import Camera from '../../assets/cameraSwap.png';
import One from '../../assets/videoModalImages/1.png';
import two from '../../assets/videoModalImages/2.png';
import three from '../../assets/videoModalImages/3.png';
import four from '../../assets/videoModalImages/4.png';

class UserMoreOptionsModal extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Overlay
          isVisible={this.props.userMoreOptionsModal}
          onBackdropPress={() => this.props.toggleUserMoreOptionsModal()}
          overlayStyle={styles.overlayWrapper}>
          <View style={styles.wrapperIcon}>
            <TouchableOpacity
              onPress={() => this.props.toggleUserMoreOptionsModal()}>
              <Svg.CloseWindowIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.flexerRow}>
            <View style={styles.wrapper}>
              <View style={styles.flexerSpacebetween}>
                <Text style={styles.textBold}>Camera</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PhoneCallScreen')}>
                  <View style={styles.flexer}>
                    <Svg.GreenVideoMaker />
                    <Text style={styles.text}>Turn off</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PhoneCallScreen')}>
                  <View style={styles.flexer}>
                    <View style={styles.GreyIcon}>
                      <Image source={Camera} />
                    </View>
                    <Text style={styles.text}>Use back</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.wrapper}>
              <View style={styles.flexerSpacebetween}>
                <Text style={styles.textBold}>Display</Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TwoPeoplePhoneCallScreen')
                  }>
                  <Image source={two} />
                </TouchableOpacity>
                <Image source={One} />
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row'
                  }}>
                  <Image source={three} />
                  <Image source={four} />
                </View>
              </View>
            </View>
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlayWrapper: {
    width: '80%',
    height: 'auto',
    borderRadius: 20,
    padding: 20
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap'
  },

  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  flexerSpacebetween: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  text: {
    fontSize: 25
  },

  textBold: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  wrapperIcon: {
    position: 'absolute',
    right: -15,
    top: -20,
    zIndex: 22
  },

  GreyIcon: {
    borderWidth: 5,
    borderColor: '#BABABA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 110,
    borderRadius: 10,
    backgroundColor: '#E6E6E6',
    width: 140
  },

  wrapper: {
    width: '100%',
    borderColor: '#919090',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginTop: 20
  }
});

export default UserMoreOptionsModal;
