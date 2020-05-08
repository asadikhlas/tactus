import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const AddContactButton = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('AddContactInSlideShow') }>
      <View style={styles.checkBtnWrapper}>
        <props.Icon width={30} height={30} />
        <Text style={styles.textwhite}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkBtnWrapper: {
    backgroundColor: '#158725',
    width: 220,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 8,
    color: 'white'
  },
  textwhite: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    marginLeft: 10
  }
});

export default AddContactButton;
