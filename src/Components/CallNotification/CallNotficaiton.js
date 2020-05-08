import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import avatar from '../../assets/person4.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CallNotification = (props) => {
  return (
    <View>
      {/* TODO: Don't render complete UI'S just focus on what is changing */}
      {props.isCallRejected ? (
        <View style={styles.callRejected}>
          <View style={styles.card}>
            <Image source={avatar} />
            <Text style={styles.text}>
              Katrina has been added to your contacts{' '}
            </Text>
            <View style={styles.undo}>
              <Text style={styles.undoText}>Undo</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.Wrapper}>
          <View style={styles.card}>
            <Image source={avatar} />
            <Text style={styles.text}>
              Katrina has been added to your contacts{' '}
            </Text>
            <View style={styles.phoneIcon}>
              <Icon name="phone" size={50} color="white" />
            </View>
          </View>
        </View>
      )}
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
    maxWidth: 210,
    fontWeight: '600',
    marginLeft: 15
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
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
    padding: 10,
    backgroundColor: '#f2a6a5',
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

export default CallNotification;
