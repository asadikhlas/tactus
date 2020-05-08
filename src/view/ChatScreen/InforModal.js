import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Svg from '../../config/svg';

class InfoModal extends Component {
  render() {
    return (
      <View>
        <Overlay
          isVisible={this.props.viewModalActive}
          onBackdropPress={() => this.props.toggleModal()}
          overlayStyle={styles.overlayWrapper}>
          <View style={styles.wrapperIcon}>
            <TouchableOpacity onPress={() => this.props.toggleModal()}>
              <Svg.CloseWindowIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.flexerRow}>
            <Text style={styles.text}>
              upload image, select emojis, share files - generally advanced chat
              functions.
            </Text>
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
    padding: 10
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap'
  },

  text: {
    fontSize: 40,
    marginTop: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  wrapperIcon: {
    position: 'absolute',
    right: -15,
    top: -20,
    zIndex: 22
  }
});

export default InfoModal;
