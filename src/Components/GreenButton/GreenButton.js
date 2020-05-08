import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const GreenButton = (props) => {
  return (
    <View style={styles.Wrapper}>
      <TouchableOpacity onPress={()=> props.navigation.navigate('AddNewGroupScreen')}>
      <View style={styles.Button}>
        <Icon name="pluscircleo" color="white" size={25} style={{marginRight:20}} />
        <Text style={styles.ButtonName}>New Group</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // marginTop: 20,
    width: 'auto',
  },
  Button: {
    backgroundColor: '#158725',
    padding: 5,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width: 'auto'
  },
  ButtonName: {
      fontSize: 25,
      color:'white',
      fontWeight: 'bold'
  }
});

export default GreenButton;
