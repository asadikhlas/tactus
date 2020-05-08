import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const Pagination = () => {
  return (
      <View style={styles.InnerWrapper}>
        <View style={styles.iconWrapper}>
          <Icon name="arrow-left" size={40} color={'#606060'} />
        </View>
        <Text style={styles.PageNo}>Page 3</Text>
        <View style={styles.iconWrapper}>
          <Icon name="arrow-right" size={40} color={'#606060'} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  // Wrapper: {
  //   marginTop: 20,
  // },
  InnerWrapper: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%'
  },
  iconWrapper: {
    borderWidth: 1,
    borderColor: '#606060',
    paddingLeft: 10,
    paddingRight: 10
  },
  PageNo: {
    fontSize: 20
  }
});

export default Pagination;
