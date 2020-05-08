import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import Svg from '../../config/svg';
import NumPaid from '../../Components/NumPaid/NumPaid';

const QuietTimeModal = (props) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', 'am/pm'];
  return (
    <View>
      <Overlay
        isVisible={props.activeQuietModal}
        onBackdropPress={() => props.toggleOverlay()}
        overlayStyle={styles.overlayWrapper}>
        <View style={styles.wrapperIcon}>
          <TouchableOpacity onPress={() => props.toggleOverlay()}>
            <Svg.CloseWindowIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.GroupSearchArea}>
          <Svg.QuietTImeIcon />
          <Text style={styles.contactHeading}>Quiet Time</Text>
        </View>
        <View style={styles.flexer}>
          <View style={{ width: '50%' }}>
            <NumPaid data={data} />
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayWrapper: {
    width: '70%',
    height: 'auto',
    borderRadius: 20,
    padding: 0,
    paddingBottom: 20
  },

  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  wrapperIcon: {
    position: 'absolute',
    right: -15,
    top: -20,
    zIndex: 22
  },

  GroupSearchArea: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderBottomColor: '#4B4B4B',
    borderBottomWidth: 1,
    width: '90%',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 40
  },
  contactHeading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4B4B4B',
    alignSelf: 'flex-end',
    marginLeft: 10
  }
});

export default QuietTimeModal;
