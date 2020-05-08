import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg from '../../config/svg';

const RejectModal = (props) => {
  return (
    <View>
      <Overlay
        isVisible={props.isRejectModal}
        onBackdropPress={() => props.toggleOverlay()}
        overlayStyle={styles.overlayWrapper}>
        <View style={styles.wrapperIcon}>
          <TouchableOpacity onPress={() => props.toggleOverlay()}>
            <Svg.CloseWindowIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.flexer}>
          <View style={styles.flexerRow}>
            <Icon name="minus-circle" color="red" size={80} />
            <Text style={styles.heading}>Why did you reject?</Text>
          </View>
          <View>
            <Text style={styles.text}>Please touch the reason below</Text>
          </View>
          <View style={styles.ButtonBlue}>
            <Text style={styles.whiteText}>I dont know this person</Text>
          </View>
          <View style={styles.ButtonBlue}>
            <Text style={styles.whiteText}>I dont want to connect</Text>
          </View>
          <View style={styles.GreyBtn}>
            <Text style={styles.whiteText}>Oops, didn't mean to.</Text>
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayWrapper: {
    width: '65%',
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
    fontSize: 20
  },
  ButtonBlue: {
    width: 330,
    padding: 15,
    backgroundColor: '#3448fe',
    borderRadius: 5,
    marginTop: 25
  },
  whiteText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center'
  },
  GreyBtn: {
    width: 330,
    padding: 15,
    backgroundColor: '#4b4b4b',
    borderRadius: 5,
    marginTop: 25
  },
  closeIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2
  },
  wrapperIcon: {
    position: 'absolute',
    right: -15,
    top: -20
  }
});

export default RejectModal;
