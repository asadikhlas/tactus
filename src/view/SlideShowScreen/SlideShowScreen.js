import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import SlideOne from '../../assets/slideshow1.png';
import Slidetwo from '../../assets/slideShow2.png';
import SlideThree from '../../assets/slideshow3.png';
import SlideFour from '../../assets/slideShow4.png';
import SlideFive from '../../assets/slideShow5.png';
import SlideSix from '../../assets/slideShow6.png';

import avatar1 from '../../assets/slideAvatar1.png';
import avatar2 from '../../assets/slideAvatar2.png';
import avatar3 from '../../assets/slideAvatar3.png';
import avatar4 from '../../assets/slideAvatar4.png';
import avatar6 from '../../assets/slideAvatar6.png';

import BottomMessageOverlay from '../../Components/BottomMessageOverlay/BottomMessageOverlay';
import TopIcon from '../../Components/TopIcon/TopIcon';
import ViewContactModal from './ViewContactModal';

class SlideShowScreen extends Component {
  state = {
    currentSlide: {
      id: 0,
      image: SlideOne,
      imageDisplay: 'ImageOne'
    },
    activeModal: true
  };

  toggleOverlay = () => {
    this.setState({ activeModal: !this.state.activeModal });
  };

  componentDidMount() {
    const array = [
      {
        id: 0,
        image: SlideOne,
        imageDisplay: 'ImageOne'
      },
      {
        id: 1,
        image: Slidetwo,
        imageDisplay: 'ImageTwo'
      },
      {
        id: 2,
        image: SlideThree,
        imageDisplay: 'ImageThree'
      },
      {
        id: 3,
        image: SlideFour,
        imageDisplay: 'ImageFour'
      },
      {
        id: 4,
        image: SlideFive,
        imageDisplay: 'ImageFive'
      },
      {
        id: 5,
        image: SlideSix,
        imageDisplay: 'ImageSix'
      }
    ];

    setInterval(() => {
      const randomElement = array[Math.floor(Math.random() * array.length)];
      this.setState({ currentSlide: randomElement });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  render() {
    const message = `We took this photo during a trip to Germany. I really love the cute small villages with their amazing Fachwerk houses. I stopped there on the way to the airport and I am now back.`;
    const { navigation } = this.props;
    const { currentSlide, activeModal } = this.state;
    return (
      <View style={{ height: '100%' }}>
        <ImageBackground
          source={this.state.currentSlide.image}
          style={styles.image}>
          {currentSlide.imageDisplay === 'ImageOne' && (
            <View>
              <TopIcon navigation={navigation} />
              <BottomMessageOverlay avatar={avatar1} navigation={navigation} />
            </View>
          )}

          {currentSlide.imageDisplay === 'ImageTwo' && (
            <View>
              <TopIcon navigation={navigation} />
              <BottomMessageOverlay
                avatar={avatar2}
                message={message}
                navigation={navigation}
                toggleOverlay={() => this.toggleOverlay()}
              />
            </View>
          )}

          {currentSlide.imageDisplay === 'ImageFive' && (
            <View>
              <TopIcon navigation={navigation} />
              <BottomMessageOverlay
                avatar={avatar3}
                navigation={navigation}
                toggleOverlay={() => this.toggleOverlay()}
              />
            </View>
          )}

          {currentSlide.imageDisplay === 'ImageSix' && (
            <View>
              <TopIcon navigation={navigation} />
              <BottomMessageOverlay
                avatar={avatar6}
                message={message}
                navigation={navigation}
                toggleOverlay={() => this.toggleOverlay()}
              />
            </View>
          )}

          {currentSlide.imageDisplay === 'ImageThree' && (
            <View>
              <TopIcon navigation={navigation} />
              <BottomMessageOverlay
                avatar={avatar4}
                message={message}
                navigation={navigation}
                toggleOverlay={() => this.toggleOverlay()}
              />
            </View>
          )}

          {currentSlide.imageDisplay === 'ImageFour' && (
            <View>
              <TopIcon navigation={navigation} />
              <BottomMessageOverlay
                avatar={avatar4}
                navigation={navigation}
                toggleOverlay={() => this.toggleOverlay()}
              />
            </View>
          )}
        </ImageBackground>
        <ViewContactModal
          activeModal={activeModal}
          toggleOverlay={() => this.toggleOverlay()}
        />
      </View>
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
    borderColor: 'red',
    borderWidth: 2,
    height: 100
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
  },
  MessageContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10
  }
});

export default SlideShowScreen;
