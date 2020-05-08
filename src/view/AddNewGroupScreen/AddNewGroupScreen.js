import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TabBar from '../../Components/TabBar/TabBar';
import Svg from '../../config/svg';
import Icon from 'react-native-vector-icons/Entypo';
import ContactUserList from './ContactUserList/ContactUserList';
import { userData } from './ContactUserList/contactUserData';
import Pagination from '../../Components/Pagination/Pagination';
import AddContactButton from '../../Components/AddContactButton/AddContactButton';

class AddNewGroupScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.MainContainer}>
          <View style={styles.SearchBoxWrapper}>
            <View style={styles.flexerSpaceBetweenRow}>
              <TextInput placeholder="Group name" style={styles.inputField} />
              <Svg.CloseWindowIcon />
            </View>
          </View>
          <ScrollView>
            <View style={styles.BtnWrapper}>
              <TouchableOpacity>
                <View style={{ marginTop: 20 }}>
                  <AddContactButton
                    text={'Add contacts'}
                    Icon={Svg.AddContactIcon}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.btnWrapper}>
                  <View style={styles.minusIconBorder}>
                    <Icon name="minus" size={15} color="white" />
                  </View>
                  <Text style={styles.textwhite}>Remove contacts</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <View>
                {userData.map((item) => (
                  <ContactUserList key={item.name} {...item} />
                ))}
              </View>
              <View style={styles.BottomWrapper}>
                <Pagination />
              </View>
            </View>
          </ScrollView>
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
  },
  flexerSpaceBetweenRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%'
  },
  inputField: {
    borderColor: '#313131',
    borderWidth: 1,
    width: '40%',
    padding: 5,
    fontSize: 20
  },
  SearchBoxWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#4B4B4B',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginTop: 20,
    width: '100%'
  },

  textwhite: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    marginLeft: 10
  },

  BtnWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
    flexWrap: 'wrap'
  },

  minusIconBorder: {
    borderWidth: 1,
    borderColor: 'white',
    height: 20,
    width: 20,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
    marginRight: 10
  },

  btnWrapper: {
    backgroundColor: '#4b4b4b',
    width: 220,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 8,
    color: 'white',
    marginTop: 20
  },
  checkBtnWrapper: {
    backgroundColor: '#158725',
    width: 220,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 8,
    color: 'white',
    marginTop: 20
  },
  BottomWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 50
  }
});

export default AddNewGroupScreen;
