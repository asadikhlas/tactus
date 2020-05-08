import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactNotAvailableModal from './ContactNotAvailableModal';

class UserList extends Component {
  state = {
    activeUserList: '',
    contactNotAvailableModal: false
  };

  handlePress = (name, isAvailable) => {
    this.setState({ activeUserList: name });
    if (!isAvailable) {
      return this.setState({ contactNotAvailableModal: true });
    }
  };

  toggleOverlay = () => {
    this.setState({
      contactNotAvailableModal: !this.state.contactNotAvailableModal
    });
  };

  render() {
    const { name, isLike, member, avatar, icon, isAvailable } = this.props;
    const { activeUserList, contactNotAvailableModal } = this.state;
    return (
      <View>
        <TouchableOpacity onPress={() => this.handlePress(name, isAvailable)}>
          <View
            style={
              activeUserList === name
                ? styles.activeContainer
                : styles.container
            }>
            <View style={styles.listWrapper}>
              <Image source={avatar}></Image>
              <View style={styles.textWrapper}>
                <Text style={styles.name}>
                  {name}{' '}
                  {isLike && <Icon name="star" size={40} color={'#158725'} />}
                </Text>
                <Text style={styles.subText}>{member}</Text>
              </View>
            </View>
            <Icon name={icon} size={40} color={'#808080'} />
          </View>
        </TouchableOpacity>
        <ContactNotAvailableModal
          contactNotAvailableModal={contactNotAvailableModal}
          toggleOverlay={() => this.toggleOverlay()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  activeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#4B4B4B',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: 'red',
    paddingTop: 10,
    width: '95%',
    backgroundColor: '#C6F3D0'
  },
  name: {
    fontSize: 30,
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
    marginLeft: 10
  }
});

export default UserList;
