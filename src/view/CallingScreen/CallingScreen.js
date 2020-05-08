import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import BackgroundImage from '../../assets/parrotImage.png';
import CallAvatar from '../../assets/callAvatar.png';
import CallActionsModal from './CallActionsModal';

class CallingScreen extends Component {
  state = {
    activeModal: false
  };

  toggleOverlay = () => {
    this.setState({ activeModal: !this.state.activeModal });
  };

  render() {
    const { navigation } = this.props;
    const { activeModal } = this.state;
    return (
      <ImageBackground source={BackgroundImage} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.flexer}>
            <Image source={CallAvatar} />
            <Text style={styles.text}>Steffan is calling you</Text>
            <View style={styles.flexerRowSpaceAround}>
              <TouchableOpacity onPress={() => this.toggleOverlay()}>
                <View style={styles.answerCall}>
                  <Text style={styles.textWhite}>Answer</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.rejectCall}>
                <Text style={styles.textWhite}>Reject</Text>
              </View>
            </View>
          </View>
        </View>
        <CallActionsModal
          activeModal={activeModal}
          toggleOverlay={() => this.toggleOverlay()}
          navigation={navigation}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexerRowSpaceAround: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%'
  },
  answerCall: {
    padding: 20,
    backgroundColor: '#158725',
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  rejectCall: {
    padding: 20,
    backgroundColor: '#FF0000',
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  textWhite: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default CallingScreen;
