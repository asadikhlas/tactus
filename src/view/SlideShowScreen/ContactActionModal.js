import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg from '../../config/svg';

const ContactActionModal = (props) => {
  return (
    <View>
      <Overlay
        isVisible={props.contactActionModal}
        onBackdropPress={() => props.toggleContactActionModal()}
        overlayStyle={styles.overlayWrapper}>
        <View style={styles.wrapperIcon}>
          <TouchableOpacity onPress={() => props.toggleContactActionModal()}>
            <Svg.CloseWindowIcon />
          </TouchableOpacity>
        </View>
        {props.currentAction === 'view' && (
          <View style={styles.flexer}>
            <View style={styles.flexerRow}>
              <Text style={styles.heading}>Slideshow</Text>
              <Text style={styles.text}>
                To remove <Text style={styles.bold}>User name</Text> from your
                slideshow click on 'Remove'
              </Text>
            </View>
            <View style={styles.RedButton}>
              <Svg.GalleryIcon />
              <Text style={styles.whiteText}>Remove</Text>
            </View>
            <View style={styles.GreyBtn}>
              <Svg.ReplyIcon />
              <Text style={styles.whiteText}>Not Now</Text>
            </View>
          </View>
        )}
        {props.currentAction === 'block' && (
          <View style={styles.flexer}>
            <View style={styles.flexerRow}>
              <Text style={styles.heading}>Block contact?</Text>
              <Text style={styles.text}>
                A blocked person cannot contact you until you remove the block
              </Text>
            </View>
            <View style={styles.RedButton}>
              <Svg.BlockIcon height={50} width={50} />
              <Text style={styles.whiteText}>Set block</Text>
            </View>
            <View style={styles.blurButton}>
              <Svg.TimerIcon height={50} width={50} />
              <Text style={styles.whiteText}>For a while</Text>
            </View>
            <View style={styles.GreyBtn}>
              <Svg.ReplyIcon height={50} width={50} />
              <Text style={styles.whiteText}>Not Now</Text>
            </View>
          </View>
        )}
        {props.currentAction === 'delete' && (
          <View style={styles.flexer}>
            <View style={styles.flexerRow}>
              <Text style={styles.heading}>Delete contact?</Text>
              <Text style={styles.text}>
                <Text style={styles.bold}>User name</Text> will no longer be
                able to contact you
              </Text>
            </View>
            <View style={styles.RedButton}>
              <Svg.DeleteIcon height={50} width={50} />
              <Text style={styles.whiteText}>Delete contact</Text>
            </View>
            <View style={styles.GreyBtn}>
              <Svg.ReplyIcon height={50} width={50} />
              <Text style={styles.whiteText}>Not Now</Text>
            </View>
          </View>
        )}
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayWrapper: {
    width: '50%',
    height: 'auto',
    borderRadius: 20,
    padding: 30
  },
  flexerRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap'
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4b4b4b'
  },
  flexer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 22
  },
  bold: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  RedButton: {
    width: '90%',
    padding: 15,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    marginTop: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  blurButton: {
    width: '90%',
    padding: 15,
    backgroundColor: '#3448FF',
    borderRadius: 5,
    marginTop: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  whiteText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginLeft: 20
  },
  GreyBtn: {
    width: '90%',
    padding: 15,
    backgroundColor: '#4B4B4B',
    borderRadius: 5,
    marginTop: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  closeIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2
  },
  wrapperIcon: {
    position: 'absolute',
    right: -15,
    top: -20
  }
});

export default ContactActionModal;
