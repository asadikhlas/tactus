import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Message from '../../Components/Message/Message';
import Svg from '../../config/svg';

class MyAccountScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={{ height: '100%' }}>
          <View>
            <View style={styles.MyAccountHeading}>
              <View style={styles.flexerRow}>
                <Svg.WrenchIcon height={50} width={50} />
                <Text style={styles.mainHeading}>My Account</Text>
              </View>
              <Svg.CloseWindowIcon />
            </View>
          </View>
          <View style={{ width: '85%' }}>
            <Message />
          </View>
          <View style={styles.iconWrapper}>
            <View style={styles.wrapper}>
              <View style={styles.flexer}>
                <Svg.WrenchIcon />
                <Text style={styles.text}>My Settings</Text>
              </View>
            </View>
            <View style={styles.wrapper}>
              <View style={styles.flexer}>
                <Icon name="image-multiple" size={90} color="#808080" />
                <Text style={styles.text}>My slideshow</Text>
              </View>
            </View>
            <View style={styles.wrapper}>
              <View style={styles.flexer}>
                <Svg.PictureIcon />
                <Text style={styles.text}>My pictures</Text>
              </View>
            </View>
            <View style={styles.wrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DoNotDisturb')}>
                <View style={styles.flexer}>
                  <Svg.SpeakerIcon />
                  <Text style={styles.text}>Do not disturb</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
              <View style={styles.flexer}>
                <Svg.AlarmIcon />
                <Text style={styles.text}>Add reminder</Text>
              </View>
            </View>
            <View style={styles.wrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate('contactRequests')}>
                <View style={styles.flexer}>
                  <Svg.WaveIcon />
                  <Text style={styles.text}>Contact requests</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
              <View style={styles.flexer}>
                <Icon name="plus-circle-outline" size={90} color="#808080" />
                <Text style={styles.text}>Add user</Text>
              </View>
            </View>
            <View style={styles.wrapper}>
              <View style={styles.flexer}>
                <Svg.LockIcon />
                <Text style={styles.text}>Kiosk Mode</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MyAccountHeading: {
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
  mainHeading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4B4B4B',
    alignSelf: 'flex-end',
    marginLeft: 10
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#808080',
    marginTop: 10,
    textAlign: 'center'
  },
  dangerText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'red',
    marginTop: 10
  },

  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '85%',
    marginTop: 20,
    height: 'auto',
    flexWrap: 'wrap'
  },
  secondRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '56%',
    marginTop: 20
  },
  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  wrapper: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: '#E9E9E9',
    width: 'auto',
    marginTop: 30
  }
});

export default MyAccountScreen;
