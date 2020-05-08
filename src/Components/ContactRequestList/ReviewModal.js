import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import Svg from '../../config/svg';

const ReviewModal = (props) => {
  return (
    <View>
      <Overlay
        isVisible={props.isReviewModal}
        onBackdropPress={() => props.toggleReviewOverlay()}
        overlayStyle={styles.overlayWrapper}>
        <View style={styles.wrapperIcon}>
          <TouchableOpacity onPress={() => props.toggleReviewOverlay()}>
            <Svg.CloseWindowIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.flexer}>
          <View style={styles.headingWrapper}>
            <Svg.PersonAvatar />
            <Text style={styles.heading}>Contact Name</Text>
          </View>
        </View>
        <View style={styles.flexer}>
          <View style={styles.SecondRow}>
            <View style={styles.flexerRowStart}>
              <Text style={styles.textBold}>Real Name</Text>
              <Text style={styles.textMuted}>managed by birgit.kliein</Text>
            </View>
            <View style={styles.flexerSpaceBetween}>
              <Text style={styles.text}>Relationship keyword</Text>
              <Text style={styles.sideText}>Phone:</Text>
            </View>
            <View style={styles.flexerSpaceBetween}>
              <Text style={styles.text}>User ID </Text>
              <Text style={styles.sideText}>Email:</Text>
            </View>
            <View style={styles.flexerSpaceBetween}>
              <Text style={styles.text}>Melbourne, Australia</Text>
              <Text style={styles.sideText}>Birthday:</Text>
            </View>
          </View>
        </View>
        <View style={styles.flexer}>
          <View style={styles.thirdRow}>
            <Text style={styles.text}>Hi Gramps,</Text>
            <Text style={styles.text}>
              as discussed last time here my connection request. I will call
              you, once you have approved me. All the best, Karina
            </Text>
          </View>
        </View>
        <View style={styles.flexer}>
          <View style={styles.fourthRow}>
            <View style={styles.flexerRow}>
              <TouchableOpacity>
                <View style={styles.btnWrapper}>
                  <View style={styles.minusIconBorder}>
                    <Icon name="minus" size={15} color="white" />
                  </View>
                  <Text style={styles.textwhite}>Reject</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.checkBtnWrapper}>
                  <Svg.TickCircle width={20} height={20} />
                  <Text style={styles.textwhite}>Accept</Text>
                </View>
              </TouchableOpacity>
            </View>
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
  textwhite: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700'
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
  SecondRow: {
    width: '100%',
    height: 'auto',
    padding: 10,
    backgroundColor: '#E9E9E9'
  },
  textBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#313131'
  },
  textMuted: {
    fontSize: 15,
    color: '#707070',
    marginLeft: 20
  },
  flexerRowStart: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  flexerSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '80%'
  },
  sideText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'right'
  },
  thirdRow: {
    width: '100%',
    height: 'auto',
    paddingTop: 5,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20
  },
  fourthRow: {
    width: '100%',
    height: 'auto',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopWidth: 2,
    borderColor: '#4b4b4b'
  },
  minusIconBorder: {
    borderWidth: 1,
    borderColor: 'white',
    height: 20,
    width: 20,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
    marginRight: 10
  },
  checkIconBorder: {
    borderWidth: 1,
    borderColor: 'white',
    height: 20,
    width: 20,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginRight: 10
  },
  btnWrapper: {
    backgroundColor: '#4b4b4b',
    width: 130,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 8,
    color: 'white',
    marginLeft: 50
  },
  checkBtnWrapper: {
    backgroundColor: '#158725',
    width: 130,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 8,
    color: 'white',
    marginLeft: 50
  }
});

export default ReviewModal;
