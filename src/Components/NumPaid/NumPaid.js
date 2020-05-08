import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

const NumPaid = (props) => {
  return (
    <View>
      <View style={styles.InputWrapper}>
        <TextInput
          placeholder="10.00 pm"
          style={styles.InputField}
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.Wrapper}>
        {props.data.map((item) => (
          <TouchableOpacity style={styles.BtnWrapper}>
            <Text
              style={typeof item === 'string' ? styles.string : styles.Text}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  BtnWrapper: {
    padding: 10,
    width: 90,
    backgroundColor: '#E9E9E9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    height: 60
  },
  Text: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  string: {
    fontSize: 20
  },
  InputWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  InputField: {
    width: '70%',
    borderStyle: 'dotted',
    fontSize: 30,
    fontWeight: 'bold',
    borderRadius: 2,
    borderWidth: 2
  }
});

export default NumPaid;
