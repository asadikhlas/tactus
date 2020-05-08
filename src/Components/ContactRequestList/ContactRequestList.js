import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import RejectModal from './RejectModal';
import ReviewModal from './ReviewModal';
import ContactSetupModal from './ContactSetupModal';

class ContactRequestList extends Component {
  state = {
    isRejectModal: false,
    isReviewModal: false,
    isContactSetupModal: false,
    currentActiveModal: ''
  };

  toggleOverlay = () => {
    this.setState({ isRejectModal: !this.state.isRejectModal });
  };

  toggleReviewOverlay = () => {
    this.setState({ isReviewModal: !this.state.isReviewModal });
  };

  toggleContactSetupOverlay = () => {
    this.setState({
      isContactSetupModal: !this.state.isContactSetupModal,
      isReviewModal: false
    });
  };

  render() {
    const { name, member, avatar } = this.props;
    const { isRejectModal, isReviewModal, isContactSetupModal } = this.state;
    return (
      <View>
        <View style={styles.Container}>
          <View style={styles.wrapper}>
            <View style={styles.listWrapper}>
              <Image source={avatar} />
              <View style={styles.textWrapper}>
                <Text style={styles.name}>{name} </Text>
                <Text style={styles.subText}>{member}</Text>
              </View>
            </View>
              <View style={styles.flexerRow}>
                <TouchableOpacity onPress={() => this.toggleReviewOverlay()}>
                  <View style={styles.reviewBtn}>
                    <Text style={styles.text}>Review</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.toggleOverlay()}>
                  <View style={styles.btnWrapper}>
                    <View style={styles.minusIconBorder}>
                      <Icon name="minus" size={15} color="white" />
                    </View>
                    <Text style={styles.text}>Reject</Text>
                  </View>
                </TouchableOpacity>
              </View>
          </View>
        </View>
        <RejectModal
          isRejectModal={isRejectModal}
          toggleOverlay={() => this.toggleOverlay()}
        />
        <ReviewModal
          isReviewModal={isReviewModal}
          toggleReviewOverlay={() => this.toggleReviewOverlay()}
        />
        <ContactSetupModal
          isContactSetupModal={isContactSetupModal}
          toggleContactSetupOverlay={() => this.toggleContactSetupOverlay()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#4B4B4B',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: 'red',
    paddingTop: 10,
    width: '95%'
  },
  name: {
    fontSize: 25,
    fontWeight: '600'
  },
  subText: {
    fontSize: 20
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: 10,
    flexWrap: 'wrap'
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  reviewBtn: {
    backgroundColor: '#3448fe',
    padding: 8,
    marginRight: 15
  },
  minusIconBorder: {
    borderWidth: 1,
    borderColor: 'white',
    height: 20,
    width: 20,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
    marginRight: 10
  },
  btnWrapper: {
    backgroundColor: '#4b4b4b',
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 8
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default ContactRequestList;
