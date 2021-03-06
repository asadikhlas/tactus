import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class AccountSetup extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ height: '100%' }}>
            <View style={styles.GroupSearchArea}>
              <View style={styles.flexerRow}>
                <Text style={styles.contactHeading}>Account set up</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('StartupScreen')}>
                <View style={styles.iconWrapper}>
                  <Icon name="reply" size={40} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.text}>Please provide your details:</Text>
            </View>
            <View style={styles.flexerRow}>
              <View style={styles.fieldSet}>
                <Text style={styles.legend}>First Name * </Text>
                <TextInput style={styles.fieldInput} />
              </View>
              <View style={styles.fieldSet}>
                <Text style={styles.legend}>Last Name * </Text>
                <TextInput style={styles.fieldInput} />
              </View>
            </View>
            <View style={styles.flexerRow}>
              <View style={styles.fieldSet}>
                <Text style={styles.legend}>Email * </Text>
                <TextInput style={styles.fieldInput} />
              </View>
            </View>
            <View style={styles.flexerRow}>
              <View style={styles.fieldSet}>
                <Text style={styles.legend}>Name for family </Text>
                <TextInput style={styles.fieldInput} />
              </View>
              <View style={styles.fieldSet}>
                <Text style={styles.legend}>Name for friends </Text>
                <TextInput style={styles.fieldInput} />
              </View>
            </View>

            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 40
              }}>
              <Text style={styles.blueText}>
                By clicking on Next you agree to our Terms
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('AccountDetailsScreen')}>
                <View style={styles.btn}>
                  <Text style={styles.textWhite}>Next</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  GroupSearchArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#4B4B4B',
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: '85%',
    marginTop: 20,
    marginBottom: 10
  },
  contactHeading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4B4B4B',
    alignSelf: 'flex-end',
    marginLeft: 10
  },

  text: {
    fontSize: 25,
    marginLeft: 10
  },
  WhiteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  flexerRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  flexerColoumn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    height: '100%'
  },

  iconWrapper: {
    height: 50,
    width: 50,
    borderRadius: 30,
    borderColor: '#707070',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fieldSet: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#707070',
    width: '40%',
    height: 50,
    marginTop: 20
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
    color: '#707070'
  },
  fieldInput: {
    width: '100%',
    height: '100%',
    fontSize: 20
  },
  blueText: {
    fontSize: 18,
    color: '#0071AB'
  },
  btn: {
    paddingVertical: 15,
    width: 'auto',
    backgroundColor: '#009688',
    paddingHorizontal: 35,
    marginTop: 20,
    borderRadius: 8
  },
  textWhite: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center'
  }
});

export default AccountSetup;
