import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Overlay } from 'react-native-elements';
import KarinaAvatar from '../../assets/karinaModal.png';
import Image1 from '../../assets/slideone.png';
import Image2 from '../../assets/slideTwo.png';
import Image3 from '../../assets/slideThree.png';
import Image4 from '../../assets/slideFour.png';
import Image5 from '../../assets/slideFive.png';
import Image6 from '../../assets/slideSix.png';
import Image7 from '../../assets/slideSeven.png';
import Image8 from '../../assets/slideEight.png';
import Svg from '../../config/svg';

class AddToSlideShowScreen extends Component {
  render() {
    const pictures = [
      Image1,
      Image2,
      Image3,
      Image4,
      Image5,
      Image6,
      Image7,
      Image8,
      Image1,
      Image3
    ];
    return (
      <View>
        <Overlay
          isVisible={this.props.isContactSetupModal}
          onBackdropPress={() => this.props.closeModal()}
          overlayStyle={styles.overlayWrapper}>
          <View style={styles.wrapperIcon}>
            <TouchableOpacity onPress={() => this.props.closeModal()}>
              <Svg.CloseWindowIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.flexerRowStart}>
            <View style={styles.headingWrapper}>
              <Image source={KarinaAvatar} />
              <View style={styles.flexer}>
                <Text style={styles.heading}>Add to slideshow?</Text>
                <Text style={styles.textBold}>
                  Touch 'Yes' to add Karina's pictures to your slideshow
                </Text>
                <View style={styles.flexerRowSpaceBetween}>
                  <View style={styles.notNowBtn}>
                    <Svg.BlockIcon width={25} height={25} />
                    <Text style={styles.notNowText}>Not now</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => this.props.overlaytoggleToPlanFeature()}>
                    <View style={styles.nextBtn}>
                      <Text style={styles.textwhite}>Yes</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.SecondRow}>
            <View style={styles.flexerRow}>
              {pictures.map((item) => (
                <View style={styles.imageCont}>
                  <Image source={item} />
                </View>
              ))}
            </View>
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlayWrapper: {
    width: '90%',
    height: 'auto',
    borderRadius: 20,
    padding: 0
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4b4b4b',
    textAlign: 'center'
  },
  flexer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  text: {
    fontSize: 22,
    marginLeft: 22
  },
  textwhite: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  notNowText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10
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
    width: '100%',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row'
  },
  SecondRow: {
    height: 'auto',
    padding: 15,
    backgroundColor: '#E9E9E9'
  },

  textBold: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#313131'
  },

  flexerRowStart: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },

  nextBtn: {
    backgroundColor: '#158725',
    width: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 12,
    color: 'white',
    marginTop: 30,
    marginLeft: 30
  },

  notNowBtn: {
    backgroundColor: '#313131',
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 12,
    color: 'white',
    marginTop: 30,
    marginLeft: 30
  },

  flexerRowSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  icon: {
    marginRight: 20
  },
  imageCont: {
    marginRight: 5,
    marginBottom: 5
  }
});

export default AddToSlideShowScreen;
