import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const MessageBox = (props) => {
  return (
    <View>
      <View style={styles.flexerRow}>
        <View>
          <Image source={props.avatar} />
          <Text style={styles.SubText}>{props.messageTime}</Text>
        </View>
        <View style={styles.messageBox}>
          {props.messageOne && (
            <Text style={styles.text}>{props.messageOne}</Text>
          )}
          <Text style={styles.text}>{props.messageTwo}</Text>
          {props.image && <Image source={props.image} />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AppName: {
    fontWeight: 'bold',
    fontSize: 60,
    color: 'white',
    margin: 0,
    padding: 0
  },
  AppText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    margin: 0
  },
  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  SubText: {
    fontSize: 15,
    fontWeight: '700'
  },
  text: {
    fontSize: 20,
    maxWidth: 350
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  messageBox: {
    borderColor: '#707070',
    borderWidth: 1,
    padding: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 20,
    backgroundColor: 'white'
  }
});

export default MessageBox;
