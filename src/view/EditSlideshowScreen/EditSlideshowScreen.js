import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Sidebar from '../../Components/Sidebar/Sidebar';
import EditSlideShowTabBar from '../../Components/EditSlideShowTabBar.js/EditSlideShowTabBar';

class EditSlideShowScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.MainContainer}>
          <EditSlideShowTabBar navigation={navigation} />
        </View>
        <View style={styles.sidebarContainer}>
          <Sidebar navigation={navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  sidebarContainer: {
    position: 'absolute',
    left: 0,
    height: '100%',
    width: '30%'
  },
  MainContainer: {
    marginLeft: '32%',
    padding: 10,
    height: '100%'
  }
});

export default EditSlideShowScreen;
