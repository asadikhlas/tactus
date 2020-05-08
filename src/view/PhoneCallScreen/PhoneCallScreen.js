import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import PhoneImage from '../../assets/phoneImage.png';

import BottomMessageOverlay from '../../Components/BottomMessageOverlay/BottomMessageOverlay';
import PhoneCallTopBar from '../../Components/PhoneCallTopBar/PhoneCallTopBar';
import PhoneCallBottomBar from '../../Components/PhoneCallBottomBar/PhoneCallBottomBar';
import PhoneCallActions from './phoneAction';
import ContactInfoModal from './ContactInfoModal';

class PhoneCallScreen extends Component {
  state = {
    currentSlide: {
      id: 0,
      image: PhoneImage
    },
    activeModal: false,
    viewContactInfoModal: false
  };

  toggleOverlay = () => {
    this.setState({ activeModal: !this.state.activeModal });
  };

  toggleViewContactModal = () => {
    this.setState({ viewContactInfoModal: !this.state.viewContactInfoModal });
  };
  render() {
    const { navigation } = this.props;
    const { activeModal, viewContactInfoModal } = this.state;
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
          <View style={{ width: '100%',bottom: 0, position: 'absolute' }}>
            <PhoneCallBottomBar navigation={navigation} />
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

export default PhoneCallScreen;
