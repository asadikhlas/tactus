import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView
} from 'react-native';
import Svg from '../../config/svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MessageBox from '../../Components/MessageBox/MessageBox';
import Avatar from '../../assets/messageAvatar.png';
import MessageImage from '../../assets/messageImage.png';
import InfoModal from './InforModal';
import PhoneCallActions from '../PhoneCallScreen/phoneAction';

class PhoneCallTopBar extends Component {
  state = {
    viewModalActive: false,
    activeModal: false
  };

  toggleOverlay = () => {
    this.setState({ activeModal: !this.state.activeModal });
  };

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

    const { activeModal } = this.state;
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View style={{ height: '100%' }}>
        <View style={styles.container}>
          <View style={styles.flexerRow}>
            <TouchableOpacity>
              <View style={styles.phoneIcon}>
                <Svg.PhoneIcon height={40} width={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('SlideShowScreen')}>
              <View style={styles.chatIcon}>
                <MaterialIcon
                  name="message-bulleted-off"
                  size={60}
                  color="white"
                />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View style={styles.userName}>
              <Text style={styles.text}>User name</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.toggleOverlay()}>
            <View style={styles.menu}>
              <Icon name="dots-horizontal" color="white" size={60} />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ marginBottom: 150 }}>
          {data.map((item, index) => (
            <View style={{ marginTop: 25 }} key={index}>
              <MessageBox {...item} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.bottomTextArea}>
          <Text style={styles.text}>Send a message to Name to Contact</Text>
          <View style={styles.flexerRowStart}>
            <TextInput style={styles.textInput} />
            <TouchableOpacity>
              <View style={styles.checkIcon}>
                <MaterialIcon name="check" color="white" size={60} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.toggleModal()}>
              <View style={styles.verticalDots}>
                <Icon name="dots-vertical" color="white" size={50} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <InfoModal
          viewModalActive={this.state.viewModalActive}
          toggleModal={() => this.toggleModal()}
        />
        <PhoneCallActions
          activeModal={activeModal}
          toggleOverlay={() => this.toggleOverlay()}
        />
      </View>
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
    backgroundColor: '#000000B2',
    paddingBottom: 10
  },
  textBold: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    color: 'black',
    fontSize: 25
  },
  menu: {
    backgroundColor: '#919090',
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
  userName: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.6)',
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 30,
    paddingLeft: 30
  },
  phoneIcon: {
    backgroundColor: '#158725',
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
  chatIcon: {
    backgroundColor: '#FF0000',
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  bottomTextArea: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'white'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: '#C6F3D0',
    borderRadius: 10,
    color: 'black',
    fontSize: 20,
    width: '80%',
    marginVertical: 10
  },
  verticalDots: {
    backgroundColor: '#3448FF',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  checkIcon: {
    backgroundColor: '#158725',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  flexerRowStart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
});

export default PhoneCallTopBar;
