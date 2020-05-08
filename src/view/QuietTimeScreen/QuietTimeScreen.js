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
import QuietTimeModal from './QuietTimeModal';
class QueitTimeScreen extends Component {
  state = {
    activeQuietModal: false
  };

  toggleOverlay = () => {
    this.setState({ activeQuietModal: !this.state.activeQuietModal });
  };

  render() {
    const { navigation } = this.props;
    const weekdays = [
      {
        day: 'Night',
        startTime: '1.00pm',
        endTime: '8.00am',
        btn: 'On'
      },
      {
        day: 'Afternoon',
        startTime: '1.00pm',
        endTime: '8.00am',
        btn: 'Off'
      },
      {
        day: 'Morning',
        startTime: '1.00pm',
        endTime: '8.00am',
        btn: 'Off'
      }
    ];
    const { activeQuietModal } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.MainContainer}>
            <View style={{ height: '100%' }}>
              <View>
                <View style={styles.GroupSearchArea}>
                  <View style={styles.flexerRow}>
                    <Svg.QuietTImeIcon />
                    <Text style={styles.contactHeading}>Quiet Time</Text>
                  </View>
                  <Svg.CloseWindowIcon />
                </View>
              </View>
              <Text style={styles.text}>Touch the time you want to change</Text>
              <Text style={styles.heading}>Weekdays:</Text>
              {weekdays.map((item) => (
                <View style={styles.BtnContainer}>
                  <View style={styles.flexerRow}>
                    <Text style={styles.dayText}>{item.day}:</Text>
                  </View>
                  <View style={styles.timeInfo}>
                    <View style={styles.greyBackground}>
                      <Text style={styles.WhiteText}>{item.startTime}</Text>
                    </View>
                    <View>
                      <Text style={styles.untilText}>Until</Text>
                    </View>
                    <View style={styles.greyBackground}>
                      <Text style={styles.WhiteText}>{item.endTime}</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={styles.flexerColoumn}>
                      <TouchableOpacity onPress={() => this.toggleOverlay()}>
                        <View
                          style={
                            item.btn === 'On'
                              ? styles.turnOnBtn
                              : styles.turnOffBtn
                          }>
                          <Text style={styles.WhiteText}>On</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}

              <Text style={styles.heading}>Weekends:</Text>
              {weekdays.map((item) => (
                <View style={styles.BtnContainer}>
                  <View style={styles.flexerRow}>
                    <Text style={styles.dayText}>{item.day}:</Text>
                  </View>
                  <View style={styles.timeInfo}>
                    <View style={styles.greyBackground}>
                      <Text style={styles.WhiteText}>{item.startTime}</Text>
                    </View>
                    <View>
                      <Text style={styles.untilText}>Until</Text>
                    </View>
                    <View style={styles.greyBackground}>
                      <Text style={styles.WhiteText}>{item.endTime}</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={styles.flexerColoumn}>
                      <TouchableOpacity onPress={() => this.toggleOverlay()}>
                        <View
                          style={
                            item.btn === 'On'
                              ? styles.turnOnBtn
                              : styles.turnOffBtn
                          }>
                          <Text style={styles.WhiteText}>On</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.sidebarContainer}>
          <Sidebar navigation={navigation} />
        </View>
        <QuietTimeModal
          activeQuietModal={activeQuietModal}
          toggleOverlay={() => this.toggleOverlay()}
        />
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
  dayText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B4B4B'
  },
  BtnContainer: {
    backgroundColor: '#e9e9e9',
    width: '85%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B4B4B'
  },
  turnOnBtn: {
    backgroundColor: '#3c8726',
    width: 50,
    padding: 10
  },
  turnOffBtn: {
    backgroundColor: 'red',
    width: 50,
    padding: 10
  },
  timeInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  WhiteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
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
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#4B4B4B',
    marginTop: 20
  },
  greyBackground: {
    backgroundColor: '#808080',
    width: 'auto',
    paddingBottom: 10,
    paddingTop: 10
  },
  untilText: {
    fontSize: 20,
    fontWeight: '600',
    marginRight: 5,
    marginLeft: 5
  }
});

export default QueitTimeScreen;
