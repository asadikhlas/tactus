import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Svg from '../../../config/svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactNotAvailableModal = (props) => {
  return (
    <View>
      <Overlay
        isVisible={props.contactNotAvailableModal}
        onBackdropPress={() => props.toggleOverlay()}
        overlayStyle={styles.overlayWrapper}>
        <View style={styles.wrapperIcon}>
          <TouchableOpacity onPress={() => props.toggleOverlay()}>
            <Svg.CloseWindowIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.flexer}>
          <View style={styles.headingWrapper}>
            <Svg.PersonAvatar />
            <Text style={styles.heading}>"Contact" is not available</Text>
          </View>
        </View>
        <View style={styles.secondRow}>
          <View style={styles.btnWrapper}>
            <Icon color="white" size={50} name="message" />
            <Text style={styles.buttonText}>Leave a message</Text>
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayWrapper: {
    width: 'auto',
    height: 'auto',
    borderRadius: 20,
    padding: 0
  },
  heading: {
    fontSize: 35,
    fontWeight: '600',
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
    fontSize: 20
  },

  wrapperIcon: {
    position: 'absolute',
    right: -15,
    top: -20,
    zIndex: 22
  },
  headingWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#CECECE',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  IconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 20,
    width: '100%'
  },
  btnWrapper: {
    width: '80%',
    backgroundColor: '#158725',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 10
  },
  secondRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});

export default ContactNotAvailableModal;
