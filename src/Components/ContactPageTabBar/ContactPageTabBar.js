import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ContactList from './ContactList/ContactList';
import { userData } from './ContactList/UserData';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MateiralIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg from '../../config/svg';
import Pagination from '../Pagination/Pagination';

class ContactPageTabBar extends Component {
  state = {
    tabNames: ['Contacts', 'Groups'],
    activeTab: 'Contacts'
  };
  render() {
    const { tabNames, activeTab } = this.state;
    const { isSlideShowContactPage } = this.props;
    return (
      <View style={styles.Container}>
        {!isSlideShowContactPage && (
          <View style={styles.tabWrapper}>
            {tabNames.map((item) => (
              <Text
                style={item === activeTab ? styles.activeTab : styles.tabName}
                onPress={() => this.setState({ activeTab: item })}>
                {item}
              </Text>
            ))}
          </View>
        )}
        {activeTab === 'Contacts' && (
          <ScrollView>
            <View>
              <View>
                <View style={styles.searchArea}>
                  <View style={styles.flexer}>
                    <MateiralIcon
                      name="image-multiple"
                      color="#808080"
                      size={50}
                    />
                    <Text style={styles.contactHeading}>Add whom?</Text>
                  </View>
                  <Svg.CloseWindowIcon />
                </View>
                {userData.map((item) => (
                  <ContactList key={item.name} {...item} />
                ))}
              </View>
            </View>
            <View style={styles.flexerSpacebetween}>
              {!isSlideShowContactPage && (
                <View style={styles.btnContainer}>
                  <View style={styles.btnWrapper}>
                    <View style={styles.plusIconBorder}>
                      <Icon name="plus" size={30} color="white" />
                    </View>
                    <Text style={styles.text}>All</Text>
                  </View>
                </View>
              )}
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
    justifyContent: 'flex-start',
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
    marginTop: 20,
    marginBottom: 40
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 80
  },
  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  flexerSpacebetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    width: '70%'
  }
});

export default ContactPageTabBar;
