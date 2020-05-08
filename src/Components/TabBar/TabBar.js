import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import searchIcon from '../../assets/search.png';
import UserList from './UserList/UserList';
import { userData } from './UserList/UserData';
import Pagination from '../Pagination/Pagination';
import GroupList from './GroupList/GroupList';
import GreenButton from '../GreenButton/GreenButton';
import Svg from '../../config/svg';

class TabBar extends Component {
  state = {
    tabNames: ['Contacts', 'Groups', 'Meet'],
    activeTab: 'Groups'
  };
  render() {
    const { tabNames, activeTab } = this.state;
    const groups = [
      'Family',
      'Friends',
      'Work',
      'Health',
      'Other 1',
      'Other 2'
    ];
    const { navigation } = this.props;
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
              <View>
                <View style={styles.searchArea}>
                  <Text style={styles.contactHeading}>Contact whom?</Text>
                  <Image source={searchIcon} />
                </View>
                {userData.map((item) => (
                  <UserList key={item.name} {...item} />
                ))}
              </View>
              <View style={styles.bottomWrapper}>
              <GreenButton navigation={navigation} />
              <Pagination />
            </View>
            </View>
          </ScrollView>
        )}
        {activeTab === 'Groups' && (
          <ScrollView>
            <View>
              <View>
                <View style={styles.GroupSearchArea}>
                  <Text style={styles.contactHeading}>
                    Contact which group?
                  </Text>
                  <Image source={searchIcon} />
                </View>
                {groups.map((item) => (
                  <GroupList groupName={item} />
                ))}
              </View>
            </View>
            <View style={styles.bottomWrapper}>
              <GreenButton navigation={navigation} />
              <Pagination />
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    marginBottom: 60
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
    flexDirection: 'row'
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
    width: '95%',
    marginTop: 20
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
    alignSelf: 'flex-end'
  },
  bottomWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginTop: 60
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default TabBar;
