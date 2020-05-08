import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Message = (props) => {
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.text}>
        No one can call you while{' '}
        <Text style={styles.boldText}>Do not disturb</Text> is on
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: '#808080',
    textAlign: 'center'
  },
  boldText: {
    fontSize: 25,
    color: '#808080',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  Wrapper: {
    borderColor: '#808080',
    borderWidth: 1,
    width: '100%',
    backgroundColor: '#f6cbcc'
  }
});

export default Message;
