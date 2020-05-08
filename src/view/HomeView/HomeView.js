import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';
import BackgroundImage from '../../assets/smaller.png';
import Logo from '../../Components/Logo/logo';
import HomeIcon from '../../Components/HomeIcon/HomeIcon';
import Svg from '../../config/svg';
import DoWhatModal from './DoWhatModal';

class HomeView extends Component {
  state = {
    activeModal: true
  };

  toggleOverlay = () => {
    this.setState({ activeModal: !this.state.activeModal });
  };

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={BackgroundImage} style={styles.image}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.navStyle}
            onPress={() => navigation.navigate('MyAccountMenu')}>
            <HomeIcon navigation={navigation} />
          </TouchableOpacity>
          <View style={styles.wrapper}>
            <TouchableOpacity>
              <Logo />
            </TouchableOpacity>
            <View style={styles.btnContainerStyle}>
              <View style={styles.iconWrapper}>
                <View style={styles.galleryIcon}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('slideShow')}>
                    <View>
                      <Svg.GalleryIcon height={80} width={80} />
                    </View>
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>My slideshow</Text>
              </View>
              <View style={styles.iconWrapper}>
                <View style={styles.phoneIcon}>
                  <TouchableOpacity onPress={() => this.toggleOverlay()}>
                    <Svg.PhoneIcon />
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>Get in touch</Text>
              </View>
              <View style={styles.iconWrapper}>
                <View style={styles.cameraIcon}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ShareAMoment')}>
                    <Svg.CameraIcon />
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>Share a moment</Text>
              </View>
            </View>
          </View>
        </View>
        <DoWhatModal
          activeModal={this.state.activeModal}
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
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1
  },
  btnContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginBottom: 10,
    height: '100%'
  },
  logoContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  galleryIcon: {
    borderWidth: 5,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: '#B715D5'
  },
  cameraIcon: {
    borderWidth: 5,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: '#158725'
  },
  phoneIcon: {
    borderWidth: 5,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: '#3448FF'
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600'
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft: 10,
    marginTop: 20
  }
});

export default HomeView;
