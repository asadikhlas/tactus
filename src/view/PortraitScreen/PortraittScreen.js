import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import Card from '../../Components/Card/Card';

class PortraitScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.MainContainer}>
          <ScrollView>
            <View style={{ height: '100%' }}>
              <View style={styles.GroupSearchArea}>
                <View style={styles.flexerRow}>
                  <Text style={styles.contactHeading}>Your portrait</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('StartupScreen')}>
                  <View style={styles.iconWrapper}>
                    <Icon name="reply" size={40} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <View style={{ marginBottom: 10 }}>
                  <Card />
                </View>
              </View>
              <View style={styles.flexerColoumn}>
                <View style={styles.flexerColoumn}>
                  <View style={styles.icon}>
                    <AntIcon name="question" size={100} color="#808080" />
                  </View>
                  <Text style={styles.greyText}>
                    Touch to add your portrait
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 40
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('YourPhotosScreen')}>
                  <View style={styles.btn}>
                    <Text style={styles.textWhite}>Next</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.sidebarContainer}>
          <Sidebar navigation={navigation} isAccountIcon={true} />
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

  text: {
    fontSize: 25,
    marginLeft: 10
  },
  WhiteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  flexerRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  flexerColoumn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconWrapper: {
    height: 50,
    width: 50,
    borderRadius: 30,
    borderColor: '#707070',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fieldSet: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#707070',
    width: '40%',
    height: 50,
    marginTop: 20
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
    color: '#707070'
  },
  fieldInput: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#707070',
    width: '50%',
    height: 50,
    marginTop: 20,
    fontSize: 20
  },
  smallFeildInput: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#707070',
    width: '30%',
    height: 50,
    marginTop: 20,
    fontSize: 20
  },

  greyText: {
    fontSize: 20,
    color: '#919090',
    fontWeight: 'bold'
  },
  btn: {
    paddingVertical: 15,
    width: 'auto',
    backgroundColor: '#009688',
    paddingHorizontal: 35,
    marginTop: 20,
    borderRadius: 8
  },
  textWhite: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center'
  },
  flexerRowSpaceBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  icon: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#808080',
    backgroundColor: '#E9E9E9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
});

export default PortraitScreen;
