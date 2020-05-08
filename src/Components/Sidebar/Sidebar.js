import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LogoIcon from '../../assets/smallLogoIcon.png';
import HomeIcon from '../HomeIcon/HomeIcon';
import Svg from '../../config/svg';

class Sidebar extends Component {
  render() {
    const { navigation, isAccountIcon } = this.props;
    const List = [
      {
        name: 'Home',
        icon: Svg.HomeIcon,
        navigate: 'Home'
      },
      {
        name: 'Invites',
        icon: Svg.WaveGreenIcon,
        navigate: 'Home'
      },
      {
        name: 'Contacts',
        icon: Svg.ContactIcon,
        navigate: 'GetInTouch'
      },
      {
        name: 'Slideshow',
        icon: Svg.GalleryIcon,
        navigate: 'SlideShowScreen'
      },
      {
        name: 'Share',
        icon: Svg.CameraIcon,
        navigate: 'Home'
      }
    ];
    return (
      <View>
        <View style={styles.SidebarContainer}>
          <View style={styles.Wrapper}>
            <View style={styles.iconWithList}>
              <View style={styles.LogoWrapper}>
                <Image source={LogoIcon} style={styles.logoIconStyle} />
                <View style={styles.flexer}>
                  <Text style={styles.AppName}>Tactus</Text>
                  <Text style={styles.SubText}>Stay in touch</Text>
                </View>
              </View>
              {List.map((item) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.navigate)}>
                  <View style={styles.homeIcon}>
                    <item.icon width={35} height={35} />
                    <Text style={styles.SubText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            {!isAccountIcon && <HomeIcon navigation={navigation} />}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SidebarContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#808080'
  },
  AppName: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    textAlign: 'center'
  },
  SubText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 5,
    textAlign: 'center'
  },
  LogoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    backgroundColor: '#000000E6'
  },
  Wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconWithList: {
    width: '100%'
  },
  homeIcon: {
    width: '100%',
    backgroundColor: '#4e4e4e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 5,
    marginTop: 5
  },
  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Sidebar;
