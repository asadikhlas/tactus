import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Svg from '../../config/svg';

class DoNotDisturbScreen extends Component {
  render() {
    const data = [
      {
        name: 'Family',
        icon: Svg.TickCircle,
        isActive: true
      },
      {
        name: 'Friend',
        icon: Svg.TickCircle,
        isActive: true
      },
      {
        name: 'Work',
        icon: Svg.BlockIcon,
        isActive: false
      },
      {
        name: 'Health',
        icon: Svg.BlockIcon,
        isActive: false
      },
      {
        name: 'Other',
        icon: Svg.BlockIcon,
        isActive: false
      }
    ];
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.MainContainer}>
            <View style={{ height: '100%' }}>
              <View>
                <View style={styles.GroupSearchArea}>
                  <View style={styles.flexerRow}>
                    <Svg.SpeakerIcon height={50} width={50} />
                    <Text style={styles.contactHeading}>Do not disturb</Text>
                  </View>
                  <Svg.CloseWindowIcon />
                </View>
              </View>
              <View style={styles.BtnContainer}>
                <View style={styles.flexerRow}>
                  <Text style={styles.text}>Do not disturb is off</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ConfirmationScreen')}>
                  <View style={styles.flexerColoumn}>
                    <View style={styles.turnOnBtn}>
                      <Text style={styles.WhiteText}>Turn On</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 30 }}>
                <View style={styles.GroupSearchArea}>
                  <Text style={styles.contactHeading}>Quiet time</Text>
                </View>
              </View>
              <View style={styles.BtnContainer}>
                <View style={styles.flexerRow}>
                  <Text style={styles.text}>Quiet time is off</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('QuietScreen')}>
                  <View style={styles.flexerColoumn}>
                    <View style={styles.turnOnBtn}>
                      <Text style={styles.WhiteText}>Turn On</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 20 }}>
                <View style={styles.GroupSearchArea}>
                  <Text style={styles.contactHeading}>Who can call me?</Text>
                </View>
              </View>
              <View>
                <Text style={styles.text}>Touch to change.</Text>
                <View style={styles.Wrapper}>
                  {data.map((item) => (
                    <View
                      style={
                        item.isActive ? styles.Button : styles.unActiveBtn
                      }>
                      <Text style={styles.ButtonName}>{item.name}</Text>
                      <item.icon width={30} height={30} />
                    </View>
                  ))}
                </View>
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
    alignSelf: 'flex-end',
    marginLeft: 10
  },

  BtnContainer: {
    backgroundColor: '#E9E9E9',
    width: '85%',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  turnOnBtn: {
    backgroundColor: '#3448ff',
    width: 120,
    padding: 8
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
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    width: '100%'
  },
  Button: {
    backgroundColor: '#158725',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    marginRight: 10,
    marginTop: 10
  },
  ButtonName: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  unActiveBtn: {
    backgroundColor: '#808080',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 180,
    marginRight: 10,
    marginTop: 10
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

export default DoNotDisturbScreen;
