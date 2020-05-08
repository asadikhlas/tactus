import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VolumeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg from '../../config/svg';
import { Slider } from 'react-native-elements';
import ShareModal from './shareModal';
import AddUserToGroupModal from './AddUserToGroupModal';

class PhoneCallActions extends Component {
  state = {
    value: 5,
    shareModal: false,
    addUserToContactModal: false
  };

  toggleShareModalOverlay = () => {
    this.setState({ shareModal: !this.state.shareModal });
  };

  toggleUserGroupModal = () => {
    this.setState({ addUserToContactModal: !this.state.addUserToContactModal });
  };
  render() {
    return (
      <View>
        <Overlay
          isVisible={this.props.activeModal}
          onBackdropPress={() => this.props.toggleOverlay()}
          overlayStyle={styles.overlayWrapper}>
          <View style={styles.wrapperIcon}>
            <TouchableOpacity onPress={() => this.props.toggleOverlay()}>
              <Svg.CloseWindowIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.flexerRow}>
            <View style={styles.IconWrapper}>
              <View style={styles.flexer}>
                <View style={styles.BlueICon}>
                  <TouchableOpacity>
                    <Icon name="message" color="white" size={70} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>Chat</Text>
              </View>
              <View style={styles.flexer}>
                <TouchableOpacity onPress={() => this.toggleUserGroupModal()}>
                  <View style={styles.BlueICon}>
                    <Svg.AddContactIcon height={70} width={70} />
                  </View>
                </TouchableOpacity>
                <Text style={styles.text}>Add</Text>
              </View>
              <View style={styles.flexer}>
                <TouchableOpacity
                  onPress={() => this.toggleShareModalOverlay()}>
                  <View style={styles.BlueICon}>
                    <Svg.ShareIcon height={70} width={70} />
                  </View>
                </TouchableOpacity>
                <Text style={styles.text}>Share</Text>
              </View>

              <View style={styles.flexer}>
                <TouchableOpacity
                  onPress={() => this.toggleShareModalOverlay()}>
                  <View style={styles.BlueICon}>
                    <Svg.HandIcon height={70} width={70} />
                  </View>
                </TouchableOpacity>
                <Text style={styles.text}>Raise hand</Text>
              </View>
            </View>
          </View>
          <View style={styles.flexerRow}>
            <View style={styles.IconWrapper}>
              <View style={styles.flexer}>
                <View style={styles.GreyIcon}>
                  <Svg.GreenMicIcon height={60} width={60} />
                </View>
                <Text style={styles.text}>Turn off</Text>
              </View>
              <View style={styles.flexer}>
                <View style={styles.GreyIcon}>
                  <TouchableOpacity>
                    <Svg.GreenSpeakerIcon height={60} width={60} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>Turn off</Text>
              </View>
            </View>
          </View>

          <View style={styles.flexerRow}>
            <View style={styles.IconWrapper}>
              <View style={styles.flexer}>
                <View style={styles.volumeIcn}>
                  <VolumeIcon name="volume-high" color="#535353" size={40} />
                </View>
                <Text style={styles.text}>Turn off</Text>
              </View>
              <View
                style={{
                  width: '45%',
                  alignItems: 'stretch',
                  justifyContent: 'center'
                }}>
                <Slider
                  value={this.state.value}
                  onValueChange={(value) => this.setState({ value })}
                  thumbTintColor="#0078D7"
                  thumbTouchSize={{ width: 200, height: 200 }}
                  trackStyle={{ backgroundColor: 'grey', height: 6 }}
                />
              </View>
              <View style={styles.flexer}>
                <View style={styles.volumeIcn}>
                  <TouchableOpacity>
                    <VolumeIcon name="volume-high" color="#535353" size={60} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>Turn off</Text>
              </View>
            </View>
          </View>

          <View style={styles.flexerRow}>
            <View
              style={{
                padding: 10,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                width: '90%'
              }}>
              <Text style={styles.text}>Advance</Text>
            </View>
          </View>
        </Overlay>
        <ShareModal
          shareModal={this.state.shareModal}
          toggleShareModalOverlay={() => this.toggleShareModalOverlay()}
        />
        <AddUserToGroupModal
          addUserToContactModal={this.state.addUserToContactModal}
          toggleUserGroupModal={() => this.toggleUserGroupModal()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlayWrapper: {
    width: '75%',
    height: 'auto',
    borderRadius: 20,
    padding: 0
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap'
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4b4b4b',
    marginLeft: 20,
    textAlign: 'center'
  },
  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  },

  wrapperIcon: {
    position: 'absolute',
    right: -15,
    top: -20,
    zIndex: 22
  },

  BlueICon: {
    borderWidth: 5,
    borderColor: '#919090',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 110,
    width: 110,
    borderRadius: 100,
    backgroundColor: '#3448FF'
  },
  IconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 20,
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#919090'
  },
  GreyIcon: {
    borderWidth: 5,
    borderColor: '#919090',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 90,
    borderRadius: 10,
    backgroundColor: '#E6E6E6',
    width: 130
  },
  volumeIcn: {
    borderWidth: 5,
    borderColor: '#919090',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#E6E6E6',
    width: 100
  }
});

export default PhoneCallActions;
