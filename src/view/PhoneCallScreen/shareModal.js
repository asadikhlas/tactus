import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Svg from '../../config/svg';

class ShareModal extends Component {
  render() {
    return (
      <View>
        <Overlay
          isVisible={this.props.shareModal}
          onBackdropPress={() => this.props.toggleShareModalOverlay()}
          overlayStyle={styles.overlayWrapper}>
          <View style={styles.wrapperIcon}>
            <TouchableOpacity
              onPress={() => this.props.toggleShareModalOverlay()}>
              <Svg.CloseWindowIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.flexerRow}>
            <View style={styles.IconWrapper}>
              <View style={styles.flexer}>
                <Text style={styles.textBold}>Advance Function</Text>
                <Text style={styles.text}>
                  Desktop and content sharing is an advanced function.
                </Text>
                <Text style={styles.text}>It can be disabled in Settings.</Text>
                <View style={styles.greenBtn}>
                  <Text style={styles.textWhite}>
                    Shares pictures and video
                  </Text>
                </View>
                <Text style={styles.text}>
                  Share pictures to talk about them.
                </Text>
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
    padding: 0
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

  IconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 20,
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#919090'
  },

  greenBtn: {
    backgroundColor: '#158725',
    padding: 10,
    width: 'auto',
    marginTop: 30
  },
  textWhite: {
    color: 'white',
    fontSize: 25
  }
});

export default ShareModal;
