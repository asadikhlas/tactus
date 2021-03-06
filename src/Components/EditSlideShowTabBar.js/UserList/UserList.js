import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserDetailModal from '../userDetailModal';

class UserList extends Component {
  state = {
    activeUserList: '',
    activeModal: false
  };

  toggleOverlay = () => {
    this.setState({ activeModal: !this.state.activeModal });
  };

  render() {
    const { name, member, avatar } = this.props;
    const { activeUserList, activeModal } = this.state;
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setState({ activeUserList: name, activeModal: true })}>
          <View
            style={
              activeUserList === name
                ? styles.activeContainer
                : styles.container
            }>
            <View style={styles.listWrapper}>
              <Image source={avatar}></Image>
              <View style={styles.textWrapper}>
                <Text style={styles.name}>{name} </Text>
                <Text style={styles.subText}>{member}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {activeModal && (
          <UserDetailModal
            activeModal={activeModal}
            toggleOverlay={() => this.toggleOverlay()}
          />
        )}
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
