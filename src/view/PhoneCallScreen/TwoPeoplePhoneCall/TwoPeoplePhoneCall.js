import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';
import PhoneImage from '../../../assets/phoneImage.png';
import PeopleOnCall from '../../../assets/oncallavatar.png';

import PhoneCallTopBar from '../../../Components/PhoneCallTopBar/PhoneCallTopBar';
import PhoneCallActions from '../phoneAction';
import ContactInfoModal from '../ContactInfoModal';
import UserMoreOptionsModal from '../UserMoreOptionsModal';

class TwoPeoplePhoneCallScreen extends Component {
  state = {
    currentSlide: {
      id: 0,
      image: PhoneImage
    },
    activeModal: false,
    viewContactInfoModal: false,
    userMoreOptionsModal: false
  };

  toggleOverlay = () => {
    this.setState({ activeModal: !this.state.activeModal });
  };

  toggleViewContactModal = () => {
    this.setState({ viewContactInfoModal: !this.state.viewContactInfoModal });
  };

  toggleUserMoreOptionsModal = () => {
    this.setState({ userMoreOptionsModal: !this.state.userMoreOptionsModal });
  };
  render() {
    const { navigation } = this.props;
    const {
      activeModal,
      viewContactInfoModal,
      userMoreOptionsModal
    } = this.state;
    return (
      <View style={{ height: '100%' }}>
        <ImageBackground
          source={this.state.currentSlide.image}
          style={styles.image}>
          <View>
            <PhoneCallTopBar
              navigation={navigation}
              toggleViewContactModal={() => this.toggleViewContactModal()}
              toggleOverlay={() => this.toggleOverlay()}
            />
          </View>
          <View
            style={{
              right: 0,
              bottom: 0,
              position: 'absolute'
            }}>
            <TouchableOpacity onPress={() => this.toggleUserMoreOptionsModal()}>
              <Image source={PeopleOnCall} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <PhoneCallActions
          activeModal={activeModal}
          toggleOverlay={() => this.toggleOverlay()}
        />
        <ContactInfoModal
          viewContactInfoModal={viewContactInfoModal}
          toggleViewContactModal={() => this.toggleViewContactModal()}
        />
        <UserMoreOptionsModal
          userMoreOptionsModal={userMoreOptionsModal}
          toggleUserMoreOptionsModal={() => this.toggleUserMoreOptionsModal()}
          navigation={navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%'
  }
});

export default TwoPeoplePhoneCallScreen;
