import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import avatar from '../../assets/person4.png';

const Card = (props) => {
  return (
    <View>
      <View style={styles.callRejected}>
        <View style={styles.card}>
          <Image source={avatar} />
          <Text style={styles.text}>
            Welcome to your new Tactu account. Please add a few more details
            about yourself to make connecting with your family and friends
            easier.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    padding: 10,
    backgroundColor: '#C6F3D0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    width: 'auto',
    marginLeft: 60,
    maxWidth: 350
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 20
  },
  phoneIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#3448FF',
    borderColor: 'white',
    borderWidth: 3,
    marginLeft: 10
  },

  callRejected: {
    backgroundColor: '#C7E9E6',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    padding: 20,
    width: '80%'
  },
  undo: {
    backgroundColor: '#4b4b4b',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: 'flex-start'
  },
  undoText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20
  }
});

export default Card;
