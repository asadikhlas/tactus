import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class ContactList extends Component {
  render() {
    const { name, isLike, member, avatar, icon, address } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.listWrapper}>
          <Image source={avatar} />
          <View style={styles.textWrapper}>
            <Text style={styles.name}>
              {name}{' '}
              {isLike && <Icon name="star" size={40} color={'#158725'} />}
            </Text>
            <Text style={styles.subText}>{member}</Text>
            <Text style={styles.subText}>{address}</Text>
          </View>
        </View>
        <View
          style={
            icon === 'plus' ? styles.plusIconBorder : styles.minusIconBorder
          }>
          <Icon name={icon} size={30} color={'white'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#4B4B4B',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: 'red',
    paddingTop: 10,
    width: '95%',
    backgroundColor: '#C6F3D0',
    paddingRight: 12,
    paddingLeft: 10
  },
  name: {
    fontSize: 30,
    fontWeight: '600'
  },
  subText: {
    fontSize: 13
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
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
  }
});

export default ContactList;
