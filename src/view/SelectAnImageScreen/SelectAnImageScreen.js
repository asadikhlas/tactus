import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import Picture from '../../assets/selectImage.png';

const SelectAnImageScreen = ({ navigation }) => {
  const array = [...Array.from(Array(30).keys())];
  return (
    <View style={{ height: '100%' }}>
      <View style={styles.topBar}>
        <Text style={styles.label}>Select an image</Text>
      </View>
      <ScrollView>
        <View style={styles.flexer}>
          <View style={styles.imageContainer}>
            {array.map((item) => (
              <View>
                <Image
                  source={Picture}
                  style={{ marginRight: 10, marginBottom: 10 }}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <View style={styles.greenBtn}>
          <Text style={styles.textWhite}>Shares image</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    height: 80,
    backgroundColor: '#0000008C',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  label: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
    marginLeft: 10
  },
  greenBtn: {
    backgroundColor: '#158725',
    padding: 10,
    borderRadius: 10,
    width: 200
  },
  textWhite: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#707070',
    width: '100%',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 20,
    marginBottom: 100
  },
  flexer: {
    display: 'flex',
    alignItems: 'center'
  }
});

export default SelectAnImageScreen;
