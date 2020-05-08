import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Overlay } from 'react-native-elements';
import Svg from '../../config/svg';

class GroupDetialsModal extends Component {
  render() {
    return (
      <View>
        <Overlay
          isVisible={this.props.groupDetailsModal}
          onBackdropPress={() => this.props.toggleGroupDetailsModal()}
          overlayStyle={styles.overlayWrapper}>
          <View style={styles.wrapperIcon}>
            <TouchableOpacity
              onPress={() => this.props.toggleGroupDetailsModal()}>
              <Svg.CloseWindowIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.flexer}>
            <Text style={styles.textBold}>Group Details?</Text>
            <View style={styles.wrapper}>
              <Text style={styles.text}>Group name:</Text>
              <TextInput style={styles.inputField} />
            </View>
          </View>
          <TouchableOpacity style={styles.flexerRow}>
            <View style={styles.greenBtn}>
              <View style={styles.flexerRow}>
                <Text style={styles.textWhite}>Save group</Text>
              </View>
            </View>
          </TouchableOpacity>
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
    justifyContent: 'center',
    flexDirection: 'row'
  },

  flexer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'left'
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
  inputField: {
    borderWidth: 1,
    borderColor: '#707070',
    width: 250,
    borderRadius: 10,
    marginLeft: 20
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20
  }
});

export default GroupDetialsModal;
