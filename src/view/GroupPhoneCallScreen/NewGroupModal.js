import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Svg from '../../config/svg';

class NewGroupModal extends Component {
  render() {
    return (
      <View>
        <Overlay
          isVisible={this.props.newGroupModal}
          onBackdropPress={() => this.props.toggleNewGroupModal()}
          overlayStyle={styles.overlayWrapper}>
          <View style={styles.wrapperIcon}>
            <TouchableOpacity onPress={() => this.props.toggleNewGroupModal()}>
              <Svg.CloseWindowIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.flexer}>
            <Text style={styles.textBold}>Save as new group?</Text>
            <TouchableOpacity
              onPress={() => this.props.toggleGroupDetailsModal()}>
              <View style={styles.greenBtn}>
                <View style={styles.flexerRow}>
                  <Svg.AddContactIcon />
                  <Text style={styles.textWhite}>Yes</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.greyBtn}>
                <View style={styles.flexerRow}>
                  <Svg.ReplyIcon />
                  <Text style={styles.textWhite}>Not now</Text>
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
  greyBtn: {
    backgroundColor: '#000000B3',
    padding: 15,
    width: 300,
    marginTop: 20
  }
});

export default NewGroupModal;
