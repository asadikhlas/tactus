import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GroupInfoModal from './GroupInfoModal';

class GroupList extends Component {
  state = {
    activeModal: false
  };

  toggleOverlay = () => {
    this.setState({ activeModal: !this.state.activeModal });
  };

  render() {
    const { activeModal } = this.state;
    return (
      <View>
        <TouchableOpacity onPress={() => this.toggleOverlay()}>
          <View style={styles.container}>
            <Text style={styles.name}>{this.props.groupName}</Text>
          </View>
        </TouchableOpacity>
        <GroupInfoModal
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
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#4B4B4B',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: 'red',
    paddingTop: 10,
    width: '75%'
  },
  name: {
    fontSize: 30,
    fontWeight: '600',
    color: '#4B4B4B'
  }
});

export default GroupList;
