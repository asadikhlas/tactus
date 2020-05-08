import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { userData } from './UserData';
import ContactRequestList from '../../Components/ContactRequestList/ContactRequestList';
import Icon from 'react-native-vector-icons/Entypo';
import CallNotification from '../../Components/CallNotification/CallNotficaiton';
import Svg from '../../config/svg';
class ContactRequestScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* <PersonAvatar width={500} height={500} /> */}
          {/* <SvgUri
            width="100%"
            height="100%"
            // uri={require('../../assets/personAvatar.svg')}
            uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
          /> */}

          <View style={styles.MainContainer}>
            <View style={styles.searchArea}>
              <View style={styles.flexerRow}>
                <Svg.GreenWaveIcon />
                <Text style={styles.contactHeading}>Contact requests</Text>
              </View>
              <Svg.CloseWindowIcon />
            </View>
            <View style={styles.CallNotificationWrapper}>
              <CallNotification isCallRejected={false} />
            </View>
            {userData.map((item) => (
              <ContactRequestList {...item} key={item.id} />
            ))}
            <View style={styles.btnContainer}>
              <View style={styles.btnWrapper}>
                <View style={styles.minusIconBorder}>
                  <Icon name="minus" size={30} color="white" />
                </View>
                <Text style={styles.text}>Reject All</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
  },
  searchArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#4B4B4B',
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: '95%',
    marginTop: 20
  },
  contactHeading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4B4B4B',
    alignSelf: 'flex-end',
    marginLeft: 10
  },
  CallNotificationWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  minusIconBorder: {
    borderWidth: 3,
    borderColor: 'white',
    height: 45,
    width: 45,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000'
  },
  btnWrapper: {
    backgroundColor: '#4b4b4b',
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 10,
    marginRight: 30
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginLeft: 10
  },
  btnContainer: {
    width: '95%',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 80
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default ContactRequestScreen;
