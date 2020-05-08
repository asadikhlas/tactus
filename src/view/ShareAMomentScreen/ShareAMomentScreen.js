import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';
import BackgroundImage from '../../assets/smaller.png';
// import SelfieIcon from '../../assets/selfieIcon.png';
// import photoIcon from '../../assets/photoIcon.png';
import ShareMomentIcon from '../../assets/icon_share_a_moment.png';
// import galleryIcon from '../../assets/galleryIcon1.png';
import Svg from '../../config/svg';

const Images = [
  {
    text: 'Take a selfie',
    image: Svg.PhoneHandIcon,
    navigateLink: 'slideShow'
  },
  {
    text: 'Take a photo',
    image: Svg.SelfiePhoneIcon,
    navigateLink: 'GetInTouch'
  },
  {
    text: 'Pick from gallery',
    image: Svg.GalleryBurstIcon,
    navigateLink: 'shareMoment'
  }
];

const ShareAMomentScreen = ({ navigation }) => {
  return (
    <ImageBackground source={BackgroundImage} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity>
            <Image source={ShareMomentIcon} />
          </TouchableOpacity>
          <View style={styles.btnContainerStyle}>
            {Images.map((item) => (
              <View style={styles.iconWrapper} key={item.text}>
                <Text style={styles.text}>{item.text}</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.navigateLink)}>
                  <item.image />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View style={styles.ButtonWrapper}>
            <Text style={styles.ButtonText}>Add URL</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

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
  iconWrapper: {
    borderWidth: 3,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#35394A',
    width: '30%'
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },
  ButtonWrapper: {
    borderWidth: 3,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#35394A',
    width: '30%'
  },
  ButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default ShareAMomentScreen;
