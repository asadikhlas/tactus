import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Svg from '../../config/svg';
import ContactActionModal from '../SlideShowScreen/ContactActionModal';

class ContactInfoModal extends Component {
  state = {
    contactActionModal: false,
    currentAction: ''
  };
  toggleContactActionModal = (action) => {
    this.setState({
      contactActionModal: !this.state.contactActionModal,
      currentAction: action
    });
  };
  render() {
    const { currentAction, contactActionModal } = this.state;
    return (
      <View>
        <Overlay
          isVisible={this.props.viewContactInfoModal}
          onBackdropPress={() => this.props.toggleViewContactModal()}
          overlayStyle={styles.overlayWrapper}>
          <View style={styles.wrapperIcon}>
            <TouchableOpacity
              onPress={() => this.props.toggleViewContactModal()}>
              <Svg.CloseWindowIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.FirstRow}>
            <View style={styles.headingWrapper}>
              <Svg.PersonAvatar />
              <Text style={styles.heading}>Contact Name</Text>
              <Text style={styles.textBold}>Family</Text>
            </View>
            <View
              style={{
                position: 'absolute',
                right: 5
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => this.toggleContactActionModal('view')}>
                  <View style={styles.iconBorder}>
                    <Svg.GalleryIcon height={25} width={25} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.toggleContactActionModal('block')}>
                  <View style={styles.iconBorder}>
                    <Svg.BlockIcon height={25} width={25} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.toggleContactActionModal('delete')}>
                  <View style={styles.iconBorder}>
                    <Svg.DeleteIcon height={25} width={25} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.flexer}>
            <View style={styles.SecondRow}>
              <View style={styles.flexerRowStart}>
                <Text style={styles.textBold}>Real Name</Text>
                <Text style={styles.textMuted}>managed by birgit.kliein</Text>
              </View>
              <View style={styles.flexerSpaceBetween}>
                <Text style={styles.text}>Relationship keyword</Text>
                <Text style={styles.sideText}>Phone:</Text>
              </View>
              <View style={styles.flexerSpaceBetween}>
                <Text style={styles.text}>User ID </Text>
                <Text style={styles.sideText}>Email:</Text>
              </View>
              <View style={styles.flexerSpaceBetween}>
                <Text style={styles.text}>Melbourne, Australia</Text>
                <Text style={styles.sideText}>Birthday:</Text>
              </View>
            </View>
          </View>
        </Overlay>
        <ContactActionModal
          contactActionModal={contactActionModal}
          toggleContactActionModal={() => this.toggleContactActionModal()}
          currentAction={currentAction}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlayWrapper: {
    width: '70%',
    height: 'auto',
    borderRadius: 20,
    padding: 0,
    paddingBottom: 5
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
  FirstRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  },
  textwhite: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700'
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
  SecondRow: {
    width: '100%',
    height: 'auto',
    padding: 10,
    backgroundColor: '#E9E9E9'
  },
  textBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#313131'
  },
  textMuted: {
    fontSize: 15,
    color: '#707070',
    marginLeft: 20
  },
  flexerRowStart: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  flexerSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '80%'
  },
  sideText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'right'
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
    height: 100,
    width: 100,
    borderRadius: 50,
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
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#808080'
  },
  IconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    marginTop: 10
  },
  phoneGreenIcon: {
    borderWidth: 5,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 100,
    width: 100,
    borderRadius: 50,
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
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#3448FF'
  },
  iconBorder: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#3B3B3B',
    marginTop: 8
  }
});

export default ContactInfoModal;
