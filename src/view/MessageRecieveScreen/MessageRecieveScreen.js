import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground
} from 'react-native';
import Svg from '../../config/svg';
import MessageBox from '../../Components/MessageBox/MessageBox';
import Avatar from '../../assets/messageAvatar.png';
import MessageImage from '../../assets/messageImage.png';
import BackgroundImage from '../../assets/slideShow5.png';

class MessageRecieveScreen extends Component {
  render() {
    const data = [
      {
        avatar: Avatar,
        messageOne: 'Hi, Dad',
        messageTwo: `How are things? I'll try to catch you another time.`,
        messageTime: '12:15pm today'
      },
      {
        avatar: Avatar,
        messageTwo: `Check out this photo. Have to go out now.`,
        messageTime: '12:15pm today',
        image: MessageImage
      },
      {
        avatar: Avatar,
        messageTwo: `Check out this photo. Have to go out now.`,
        messageTime: '12:15pm today'
      }
    ];

    const {
      navigation: { navigate }
    } = this.props;
    return (
      <ImageBackground source={BackgroundImage} style={styles.image}>
        <View style={styles.mainContainer}>
          <View style={{ position: 'absolute' }}>
            <View style={styles.flexerRow}>
              <TouchableOpacity>
                <View style={styles.phoneIcon}>
                  <Svg.PhoneIcon height={40} width={40} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={{ marginBottom: 90, marginTop: 60 }}>
            {data.map((item, index) => (
              <View style={{ marginTop: 25 }} key={index}>
                <MessageBox {...item} />
              </View>
            ))}
          </ScrollView>
          <View style={styles.bottomTextArea}>
            <View style={styles.flexerSpaceBetween}>
              <Text style={styles.text}>Henric sent messages</Text>
              <View style={styles.flexerRow}>
                <TouchableOpacity onPress={() => navigate('ChatScreen')}>
                  <View style={styles.greenBtn}>
                    <Text style={styles.textWhite}>Respond</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.greyBtn}>
                  <Text style={styles.textWhite}>Hide</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 10
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold'
  },
  textWhite: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  phoneIcon: {
    backgroundColor: '#3448FF',
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10
  },

  flexerRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  bottomTextArea: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'white'
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%'
  },
  mainContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1
  },
  greenBtn: {
    backgroundColor: '#158725',
    width: 200,
    padding: 15,
    borderRadius: 10,
    marginLeft: 20
  },
  greyBtn: {
    backgroundColor: '#000000B3',
    width: 200,
    padding: 15,
    borderRadius: 10,
    marginLeft: 20
  },
  flexerSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default MessageRecieveScreen;
