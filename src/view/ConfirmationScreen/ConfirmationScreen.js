import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ClockIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Message from '../../Components/Message/Message';
import Svg from '../../config/svg';
class ConfirmationScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.MainContainer}>
          <View style={{ height: '100%' }}>
            <View>
              <View style={styles.GroupSearchArea}>
                <View style={styles.flexerRow}>
                  <ClockIcon size={60} name="restore-clock" color="grey" />
                  <Text style={styles.contactHeading}>Do not disturb</Text>
                </View>
                <Svg.CloseWindowIcon />
              </View>
            </View>
            <View style={{ width: '85%' }}>
              <Message />
            </View>
            <View style={styles.BtnContainer}>
              <View style={styles.flexerRow}>
                <ClockIcon size={50} name="restore-clock" color="black" />
                <Text style={styles.text}>
                  Do not disturb for <Text>59</Text> minutes
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ConfirmationScreen')}>
                <View style={styles.flexerColoumn}>
                  <View style={styles.turnOfBtn}>
                    <Text style={styles.WhiteText}>Turn Off</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.sidebarContainer}>
          <Sidebar navigation={navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  GroupSearchArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#4B4B4B',
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: '85%',
    marginTop: 20,
    marginBottom: 10
  },
  contactHeading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4B4B4B',
    alignSelf: 'flex-end'
  },
  BtnContainer: {
    backgroundColor: '#E9E9E9',
    width: '70%',
    padding: 10,
    marginLeft: 40,
    marginTop: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  turnOfBtn: {
    backgroundColor: 'red',
    width: '70%',
    padding: 12,
    marginTop: 10
  },
  WhiteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  Wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    width: '100%'
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  flexerColoumn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
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

export default ConfirmationScreen;
