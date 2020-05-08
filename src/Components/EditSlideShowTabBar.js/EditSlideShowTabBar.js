import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Svg from '../../config/svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { userData } from './UserList/UserData';
import UserList from './UserList/UserList';
import Pagination from '../Pagination/Pagination';
import AddContactButton from '../AddContactButton/AddContactButton';
import UserDetailModal from './userDetailModal';

class EditSlideShowTabBar extends Component {
  state = {
    tabNames: ['Contacts', 'Settings'],
    activeTab: 'Contacts',
    activeModal: false
  };

  toggleOverlay = () => {
    this.setState({ activeModal: !this.state.activeModal });
  };

  render() {
    const data = [
      {
        isActive: false,
        text: 'Run Slideshow'
      },
      {
        isActive: true,
        text: 'Show images for'
      },
      {
        isActive: false,
        text: 'Use animated transitions'
      },
      {
        isActive: false,
        text: 'Zoom into image'
      },
      {
        isActive: false,
        text: 'Pin image for'
      },
      {
        isActive: false,
        text: 'Show pin time dialog'
      }
    ];
    const { tabNames, activeTab, activeModal } = this.state;
    const {navigation} = this.props
    return (
      <View style={styles.Container}>
        <View style={styles.tabWrapper}>
          <View style={styles.flexerRow}>
            {tabNames.map((item) => (
              <Text
                style={item === activeTab ? styles.activeTab : styles.tabName}
                onPress={() => this.setState({ activeTab: item })}>
                {item}
              </Text>
            ))}
          </View>
          <Svg.CloseWindowIcon />
        </View>

        {activeTab === 'Contacts' && (
          <ScrollView>
            <View>
              <View style={styles.flexerRow}>
                <View style={styles.searchArea}>
                  <View style={styles.flexerRow}>
                    <Icon name="image-multiple" color="#808080" size={50} />
                    <Text style={styles.contactHeading}>Edit Slideshow</Text>
                  </View>
                </View>
              </View>
              <View>
                <AddContactButton
                  text={'Add contacts'}
                  Icon={Svg.AddContactIcon}
                  navigation={navigation}
                />
              </View>
              <View style={{marginTop: 20}}>
                {userData.map((item) => (
                  <UserList key={item.name} {...item} />
                ))}
              </View>
              <View
                style={{
                  marginTop: 50,
                  marginBottom: 50,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end'
                }}>
                <Pagination />
              </View>
            </View>
          </ScrollView>
        )}

        {activeTab === 'Settings' && (
          <ScrollView>
            <View style={styles.flexerRow}>
              <View style={styles.searchArea}>
                <View style={styles.flexerRow}>
                  <Icon name="image-multiple" color="#808080" size={50} />
                  <Text style={styles.contactHeading}>Edit Slideshow</Text>
                </View>
              </View>
            </View>
            <Text style={styles.text}>
              Touch the Setting you want to change
            </Text>

            {data.map((item) => (
              <View style={styles.BtnContainer}>
                <View style={styles.flexerRow}>
                  <Text style={styles.text}>{item.text}</Text>
                </View>
                <TouchableOpacity>
                  <View style={styles.flexerColoumn}>
                    <View style={styles.turnOnBtn}>
                      {item.isActive ? (
                        <View>
                          <Text style={styles.WhiteText}>10</Text>
                        </View>
                      ) : (
                        <Text style={styles.WhiteText}>On</Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    width: '95%',
    marginBottom: 30
  },
  tabName: {
    fontWeight: '700',
    color: '#BABABA',
    fontSize: 25,
    marginRight: 20
  },
  tabWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '95%'
  },
  activeTab: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 25,
    marginRight: 20
  },
  searchArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#4B4B4B',
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: '100%',
    marginTop: 10,
    marginBottom: 20
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
  plusIconBorder: {
    borderWidth: 3,
    borderColor: 'white',
    height: 45,
    width: 45,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3448FF'
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
    backgroundColor: '#707070',
    width: 160,
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
  },
  BtnContainer: {
    backgroundColor: '#E9E9E9',
    width: '95%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  turnOnBtn: {
    backgroundColor: '#158725',
    width: 'auto',
    padding: 10
  },
  WhiteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  flexerColoumn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default EditSlideShowTabBar;
