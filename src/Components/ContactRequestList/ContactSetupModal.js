import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import { Overlay } from 'react-native-elements';
import KarinaAvatar from '../../assets/karinaModal.png';
import AddToSlideShowScreen from './AddToSlideShowScreen';
import Svg from '../../config/svg';
import Avatar from '../../assets/avatarBoldPerson.png';
class ContactSetupModal extends Component {
  state = {
    currentActiveModal: 'ContactSetupModal',
    activeItem: ''
  };

  togglePlanFeatureOverlay = () => {
    this.setState({ currentActiveModal: 'planFeatureModal' });
  };

  render() {
    const { currentActiveModal, activeItem } = this.state;
    const relations = ['Family', 'Friends', 'Work', 'Health', 'Other'];
    return (
      <View>
        {currentActiveModal === 'addToSlideShowScreen' ? (
          <AddToSlideShowScreen
            overlaytoggleToPlanFeature={() => this.togglePlanFeatureOverlay()}
            closeModal={() => this.props.toggleContactSetupOverlay()}
          />
        ) : (
          <Overlay
            isVisible={this.props.isContactSetupModal}
            onBackdropPress={() => this.props.toggleContactSetupOverlay()}
            overlayStyle={
              currentActiveModal === 'relationShipModal'
                ? styles.smallOverlay
                : styles.overlayWrapper
            }>
            <View style={styles.wrapperIcon}>
              <TouchableOpacity
                onPress={() => {
                  this.props.toggleContactSetupOverlay();
                }}>
                <Svg.CloseWindowIcon />
              </TouchableOpacity>
            </View>
            {currentActiveModal === 'ContactSetupModal' && (
              <View>
                <View style={styles.flexerRowStart}>
                  <View style={styles.headingWrapper}>
                    <Image source={KarinaAvatar} />
                    <View style={styles.flexer}>
                      <Text style={styles.heading}>Contact set up</Text>
                      <Text style={styles.textBold}>Karina</Text>
                      <Text style={styles.textBold}>Karina Lebert</Text>
                      <Text style={styles.text}>Melbourne Australia</Text>
                      <Text style={styles.text}>Monday: 18:45 pm</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.SecondRow}>
                  <View style={styles.flexerRowStart}>
                    <Text style={styles.description}>
                      If you like you can add a nickname for karina
                    </Text>
                  </View>
                  <View style={styles.flexerRowStart}>
                    <Text style={styles.textBold}>Nickname:</Text>
                    <TextInput style={styles.inputNickname} />
                  </View>
                  <View style={styles.flexerRow}>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          currentActiveModal: 'relationShipModal'
                        })
                      }>
                      <View style={styles.nextBtn}>
                        <Text style={styles.textwhite}>Next</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            {currentActiveModal === 'relationShipModal' && (
              <View>
                <View style={styles.flexerRowStart}>
                  <View style={styles.headingWrapper}>
                    <Image source={KarinaAvatar} />
                    <View style={styles.flexer}>
                      <Text style={styles.heading}>Contact set up</Text>
                      <Text style={styles.textBold}>Karina</Text>
                      <Text style={styles.textBold}>Karina Lebert</Text>
                      <Text style={styles.text}>Melbourne Australia</Text>
                      <Text style={styles.text}>Monday: 18:45 pm</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.SecondRow}>
                  <View style={styles.flexerRowStart}>
                    <Text style={styles.description}>
                      Touch the word matching your relationship
                    </Text>
                  </View>
                  <View style={styles.flexerRowSpaceBetween}>
                    {relations.map((item) => (
                      <TouchableOpacity
                        key={item}
                        onPress={() =>
                          this.setState({
                            currentActiveModal: 'addRelation',
                            activeItem: item
                          })
                        }>
                        <Text style={styles.Relations}>{item}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </View>
            )}

            {currentActiveModal === 'addRelation' && (
              <View>
                <View style={styles.flexerRowStart}>
                  <View style={styles.headingWrapper}>
                    <Image source={KarinaAvatar} />
                    <View style={styles.flexer}>
                      <Text style={styles.heading}>Contact set up</Text>
                      <Text style={styles.textBold}>Karina</Text>
                      <Text style={styles.textBold}>Karina Lebert</Text>
                      <Text style={styles.text}>Melbourne Australia</Text>
                      <Text style={styles.text}>Monday: 18:45 pm</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.SecondRow}>
                  <View style={styles.flexerRowStart}>
                    <Text style={styles.description}>
                      Touch the word matching your relationship
                    </Text>
                  </View>
                  <View style={styles.flexerRowSpaceBetween}>
                    {relations.map((item) => (
                      <TouchableOpacity key={item}>
                        <Text
                          style={
                            item === activeItem
                              ? styles.relationsActive
                              : styles.RelationsUnactive
                          }>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <View style={styles.flexerRowStart}>
                    <Text style={styles.description}>
                      you can write two or three words to calrify your
                      relationship
                    </Text>
                  </View>
                  <View style={styles.flexerRowStart}>
                    <Text style={styles.textBold}>Relationship keyword:</Text>
                    <TextInput
                      style={styles.inputNickname}
                      placeholder="Family"
                    />
                  </View>
                  <View style={styles.flexerRow}>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          currentActiveModal: 'addToSlideShowScreen'
                        })
                      }>
                      <View style={styles.nextBtn}>
                        <Text style={styles.textwhite}>Next</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            {currentActiveModal === 'planFeatureModal' && (
              <View>
                <View style={styles.flexerRowStart}>
                  <View style={styles.headingWrapper}>
                    <Image source={Avatar} />
                    <View style={styles.flexer}>
                      <Text style={styles.heading}>Plan feature</Text>
                      <Text style={styles.paragraph}>
                        To add more than five contacts to your slideshow select
                        a paid plan, please
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.SecondRow}>
                  <View style={styles.flexer}>
                    <Text style={styles.textBold}>Hi Contact Name</Text>
                    <Text style={styles.paragraphTwo}>
                      Hi Contact name, I have creates TactusChat to stay in
                      touch with my parents and my mother in law. And to help
                      you stay in touch with your loved ones, too. Please help
                      me maintain this service by upgrading your account, so I
                      can continue to help as many people as possible to stay in
                      touch with each other. All the best, Steffan Klein
                    </Text>
                  </View>
                </View>
                <View style={styles.flexerSpaceAround}>
                  <Text style={styles.textBold}>Signature</Text>
                  <Text style={styles.textBold}>$1.65 per week</Text>
                </View>
                <View style={{ padding: 20 }}>
                  <View style={styles.flexerSpaceAround}>
                    <View style={styles.notNowBtn}>
                      <Svg.ReplyIcon width={30} height={30} />
                      <Text style={styles.notNowText}>Not now</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => this.props.overlaytoggleToPlanFeature()}>
                      <View style={styles.helpBtn}>
                        <Svg.GalleryIcon width={30} height={30} />
                        <Text style={styles.notNowText}>I'll help</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
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
  smallOverlay: {
    width: '70%',
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
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4b4b4b',
    marginLeft: 20,
    textAlign: 'center'
  },
  flexer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%'
  },
  text: {
    fontSize: 22,
    marginLeft: 22
  },
  textwhite: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center'
  },

  closeIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2
  },
  wrapperIcon: {
    position: 'absolute',
    right: -15,
    top: -20,
    zIndex: 22
  },
  headingWrapper: {
    width: '100%',
    padding: 10,
    backgroundColor: '#CECECE',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row'
  },
  SecondRow: {
    width: '100%',
    height: 'auto',
    padding: 15
  },
  description: {
    fontSize: 18
  },

  textBold: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#313131',
    marginLeft: 20
  },

  flexerRowStart: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },

  nextBtn: {
    backgroundColor: '#158725',
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 12,
    color: 'white',
    marginTop: 20
  },

  helpBtn: {
    backgroundColor: '#158725',
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 12,
    color: 'white'
  },
  inputNickname: {
    borderColor: '#313131',
    borderWidth: 1,
    width: '30%',
    marginLeft: 20,
    padding: 5,
    marginTop: 15
  },
  Relations: {
    fontSize: 22,
    color: '#3448FF',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30
  },
  relationsActive: {
    fontSize: 22,
    color: '#3448FF',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
    padding: 5,
    borderWidth: 1,
    borderColor: 'grey'
  },
  RelationsUnactive: {
    fontSize: 22,
    color: '#313131',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30
  },
  flexerRowSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  paragraph: {
    fontSize: 22,
    marginLeft: 22,
    width: '70%',
    position: 'relative'
  },
  paragraphTwo: {
    fontSize: 22,
    marginLeft: 22,
    width: '90%',
    position: 'relative',
    color: '#707070'
  },
  notNowText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10
  },

  notNowBtn: {
    backgroundColor: '#313131',
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 12,
    color: 'white'
  },
  flexerSpaceAround: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  }
});

export default ContactSetupModal;
