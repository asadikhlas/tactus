import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Svg from '../../config/svg';
import ContactInfoModal from './ContactInfoModal';

class ViewContactModal extends Component {
  state = {
    viewOtherOptions: false,
    isContactInfoModal: false
  };
  render() {
    const { viewOtherOptions, isContactInfoModal } = this.state;
    return (
      <View>
        {isContactInfoModal ? (
          <ContactInfoModal
            activeModal={this.props.activeModal}
            toggleOverlay={() => this.props.toggleOverlay()}
          />
        ) : (
          <Overlay
            isVisible={this.props.activeModal}
            onBackdropPress={() => this.props.toggleOverlay()}
            overlayStyle={styles.overlayWrapper}>
            <View style={styles.wrapperIcon}>
              <TouchableOpacity onPress={() => this.props.toggleOverlay()}>
                <Svg.CloseWindowIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.flexer}>
              <View style={styles.headingWrapper}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      isContactInfoModal: !this.state.isContactInfoModal
                    })
                  }>
                  <Svg.GroupNameAvatar />
                </TouchableOpacity>
                <Text style={styles.heading}>Contact Name</Text>
                <Text style={styles.textBold}>Family</Text>
              </View>
            </View>
            {viewOtherOptions ? (
              <View style={styles.IconWrapper}>
                <View style={styles.flexer}>
                  <View style={styles.phoneGreenIcon}>
                    <TouchableOpacity>
                      <Svg.PhoneIcon height={60} width={60} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.text}>Voice Call</Text>
                </View>
                <View style={styles.flexer}>
                  <View style={styles.VideoBlueIcon}>
                    <TouchableOpacity>
                      <Svg.VideoCallIcon height={60} width={60} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.text}>Video Call</Text>
                </View>
                <View style={styles.flexer}>
                  <View style={styles.ChatIcon}>
                    <TouchableOpacity>
                      <Icon name="chat" color="white" size={70} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.text}>Message</Text>
                </View>
              </View>
            ) : (
              <View style={styles.IconWrapper}>
                <View style={styles.flexer}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        viewOtherOptions: !this.state.viewOtherOptions
                      })
                    }>
                    <View style={styles.phoneIcon}>
                      <Svg.PhoneIcon height={60} width={60} />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.text}>Contact</Text>
                </View>
                <View style={styles.flexer}>
                  <View style={styles.VideoIcon}>
                    <TouchableOpacity>
                      <Svg.GalleryBurstIcon height={60} width={60} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.text}>All pictures</Text>
                </View>
              </View>
            )}
          </Overlay>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlayWrapper: {
    width: '70%',
    height: 'auto',
    borderRadius: 20,
    padding: 0
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
  headingWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#CECECE',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },

  textBold: {
    fontSize: 25,
    fontWeight: '500',
    color: '#313131'
  },

  phoneIcon: {
    borderWidth: 5,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 130,
    width: 130,
    borderRadius: 100,
    backgroundColor: '#3448FF'
  },
  VideoIcon: {
    borderWidth: 5,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 130,
    width: 130,
    borderRadius: 100,
    backgroundColor: '#B715D5'
  },
  ChatIcon: {
    borderWidth: 5,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 130,
    width: 130,
    borderRadius: 100,
    backgroundColor: '#808080'
  },
  IconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 20,
    width: '100%'
  },
  phoneGreenIcon: {
    borderWidth: 5,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 130,
    width: 130,
    borderRadius: 100,
    backgroundColor: '#158725'
  },
  VideoBlueIcon: {
    borderWidth: 5,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 130,
    width: 130,
    borderRadius: 100,
    backgroundColor: '#3448FF'
  }
});

export default ViewContactModal;
