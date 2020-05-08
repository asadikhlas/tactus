import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';
import PhoneImage from '../../assets/phoneImage.png';
import PhoneCallTopBar from '../../Components/PhoneCallTopBar/PhoneCallTopBar';
import PhoneCallActions from '../PhoneCallScreen/phoneAction';
import ContactInfoModal from '../PhoneCallScreen/ContactInfoModal';
import UserMoreOptionsModal from '../PhoneCallScreen/UserMoreOptionsModal';
import One from '../../assets/videoCallImages/1.png';
import Two from '../../assets/videoCallImages/2.png';
import Three from '../../assets/videoCallImages/3.png';
import Four from '../../assets/videoCallImages/4.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg from '../../config/svg';
import HandModal from './HandModal';
import NewGroupModal from './NewGroupModal';
import GroupDetialsModal from './GroupDetialsModal';

class GroupPhoneCallScreen extends Component {
  state = {
    currentSlide: {
      id: 0,
      image: PhoneImage
    },
    activeModal: false,
    viewContactInfoModal: false,
    userMoreOptionsModal: false,
    handModal: true,
    newGroupModal: false,
    groupDetailsModal: false,
    activeBtn: ''
  };

  toggleOverlay = () => {
    this.setState({ activeModal: !this.state.activeModal });
  };

  toggleHandModal = (toBeActive) => {
    this.setState({ handModal: !this.state.handModal, activeBtn: toBeActive });
  };

  toggleViewContactModal = () => {
    this.setState({ viewContactInfoModal: !this.state.viewContactInfoModal });
  };

  toggleUserMoreOptionsModal = () => {
    this.setState({ userMoreOptionsModal: !this.state.userMoreOptionsModal });
  };

  toggleNewGroupModal = () => {
    this.setState({ newGroupModal: !this.state.newGroupModal });
  };
  toggleGroupDetailsModal = () => {
    this.setState({ groupDetailsModal: !this.state.groupDetailsModal });
  };

  render() {
    const { navigation } = this.props;
    const {
      activeModal,
      viewContactInfoModal,
      userMoreOptionsModal,
      handModal,
      activeBtn,
      newGroupModal,
      groupDetailsModal
    } = this.state;
    return (
      <View style={{ height: '100%' }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            zIndex: 2
          }}>
          <PhoneCallTopBar
            navigation={navigation}
            toggleViewContactModal={() => this.toggleViewContactModal()}
            toggleOverlay={() => this.toggleOverlay()}
            isUserName={true}
            toggleNewGroupModal={() => this.toggleNewGroupModal()}
          />
        </View>
        <View style={{ position: 'absolute', zIndex: 2, right: '38%' }}>
          <View style={styles.flexer}>
            <TouchableOpacity onPress={() => this.toggleHandModal('handModal')}>
              <View style={styles.BlueICon}>
                <Svg.HandIcon height={60} width={60} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.flexer}>
            <View style={{ width: '50%', height: 'auto' }}>
              <TouchableOpacity>
                <Image source={One} />
              </TouchableOpacity>
              <View style={{ position: 'absolute', right: 0 }}>
                <TouchableOpacity onPress={() => this.toggleViewContactModal()}>
                  <View style={styles.flexerRow}>
                    <Text style={styles.text}>Steffan</Text>
                    <Icon name="microphone" size={30} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: '50%', height: 'auto' }}>
              <TouchableOpacity
                onPress={() => this.toggleUserMoreOptionsModal()}>
                <Image source={Two} />
              </TouchableOpacity>
            </View>
            <View style={{ width: '50%', height: 'auto' }}>
              <Image source={Three} />
              <View style={{ position: 'absolute', right: 0 }}>
                <TouchableOpacity onPress={() => this.toggleViewContactModal()}>
                  <View style={styles.flexerRow}>
                    <Text style={styles.text}>Birgit</Text>
                    <Icon name="microphone" size={30} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: '50%', height: 'auto' }}>
              <TouchableOpacity
                onPress={() => this.toggleHandModal('endCallModal')}>
                <Image source={Four} />
              </TouchableOpacity>
              <View style={{ position: 'absolute', right: 0 }}>
                <TouchableOpacity onPress={() => this.toggleViewContactModal()}>
                  <View style={styles.flexerRow}>
                    <Text style={styles.text}>Lena</Text>
                    <Icon name="microphone" size={30} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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
        <HandModal
          handModal={handModal}
          toggleHandModal={() => this.toggleHandModal()}
          activeBtn={activeBtn}
        />
        <NewGroupModal
          newGroupModal={newGroupModal}
          toggleNewGroupModal={() => this.toggleNewGroupModal()}
          toggleGroupDetailsModal={() => this.toggleGroupDetailsModal()}
        />
        <GroupDetialsModal
          toggleGroupDetailsModal={() => this.toggleGroupDetailsModal()}
          groupDetailsModal={groupDetailsModal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%'
  },
  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.6)',
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 30,
    paddingLeft: 30,
    zIndex: 23
  },
  text: {
    color: 'black',
    fontSize: 25
  },
  BlueICon: {
    borderWidth: 5,
    borderColor: '#919090',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#3448FF'
  }
});

export default GroupPhoneCallScreen;
