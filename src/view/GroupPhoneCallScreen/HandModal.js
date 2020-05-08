import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VolumeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg from '../../config/svg';
import { Slider } from 'react-native-elements';

class HandModal extends Component {
  render() {
    return (
      <View>
        <Overlay
          isVisible={this.props.handModal}
          onBackdropPress={() => this.props.toggleHandModal()}
          overlayStyle={styles.overlayWrapper}>
          <View style={styles.wrapperIcon}>
            <TouchableOpacity onPress={() => this.props.toggleHandModal()}>
              <Svg.CloseWindowIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.flexerRow}>
            <View style={styles.flexer}>
              {this.props.activeBtn === 'handModal' && (
                <View style={styles.blueBtn}>
                  <View style={styles.flexerRow}>
                    <Svg.HandIcon height={50} width={50} />
                    <Text style={styles.textWhite}>Lower hand</Text>
                  </View>
                </View>
              )}

              {this.props.activeBtn === 'endCallModal' && (
                <View style={styles.redBtn}>
                  <View style={styles.flexerRow}>
                    <Svg.EndCallIcon height={50} width={50} />
                    <Text style={styles.textWhite}>End call with Lena</Text>
                  </View>
                </View>
              )}
              <View style={styles.GreyBtn}>
                <View style={styles.flexerRow}>
                  <Svg.ReplyIcon height={50} width={50} />
                  <Text style={styles.textWhite}>Not now</Text>
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
    width: '50%',
    height: 'auto',
    borderRadius: 20,
    padding: 30
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap'
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4b4b4b',
    marginLeft: 20,
    textAlign: 'center'
  },
  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 25
  },

  textBold: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  wrapperIcon: {
    position: 'absolute',
    right: -15,
    top: -20,
    zIndex: 22
  },

  BlueICon: {
    borderWidth: 5,
    borderColor: '#919090',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 110,
    width: 110,
    borderRadius: 100,
    backgroundColor: '#3448FF'
  },
  IconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#919090'
  },
  GreyIcon: {
    borderWidth: 5,
    borderColor: '#919090',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 90,
    borderRadius: 10,
    backgroundColor: '#E6E6E6',
    width: 130
  },
  volumeIcn: {
    borderWidth: 5,
    borderColor: '#919090',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#E6E6E6',
    width: 100
  },
  blueBtn: {
    backgroundColor: '#3448FF',
    padding: 10,
    width: '100%',
    marginTop: 30
  },
  textWhite: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20
  },
  GreyBtn: {
    backgroundColor: '#000000B3',
    padding: 10,
    width: '100%',
    marginTop: 30
  },
  redBtn: {
    backgroundColor: '#FF0000',
    padding: 10,
    width: '100%',
    marginTop: 30
  }
});

export default HandModal;
