import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Overlay } from 'react-native-elements';
import Svg from '../../config/svg';
import Avatar from '../../assets/videoModalImages/2.png';
import Icon from 'react-native-vector-icons/Ionicons';

class DoWhatModal extends Component {
  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View>
        <Overlay
          isVisible={this.props.activeModal}
          onBackdropPress={() => this.props.toggleOverlay()}
          overlayStyle={styles.overlayWrapper}>
          <View style={styles.wrapperIcon}>
            <TouchableOpacity onPress={() => this.props.toggleOverlay()}>
              <Svg.CloseWindowIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.flexer}>
            <Text style={styles.textBold}>Do What?</Text>
            <TouchableOpacity
              onPress={() => navigate('TwoPeoplePhoneCallScreen')}>
              <View style={styles.greenBtn}>
                <View style={styles.flexerRow}>
                  <Image source={Avatar} style={{ borderRadius: 100 }} />
                  <Text style={styles.textWhite}>Call Steffan</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('GetInTouch')}>
              <View style={styles.pinkBtn}>
                <View style={styles.flexerRow}>
                  <Icon name="md-contact" color="white" size={50} />
                  <Text style={styles.textWhite}>View Contacts</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlayWrapper: {
    width: 'auto',
    height: 'auto',
    borderRadius: 20,
    padding: 30
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap'
  },

  flexer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 25
  },

  textBold: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left'
  },

  wrapperIcon: {
    position: 'absolute',
    right: -15,
    top: -20,
    zIndex: 22
  },

  greenBtn: {
    backgroundColor: '#158725',
    padding: 15,
    width: 300,
    marginTop: 30
  },
  textWhite: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10
  },
  pinkBtn: {
    backgroundColor: '#B715D5',
    padding: 15,
    width: 300,
    marginTop: 20
  }
});

export default DoWhatModal;
