import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
    },
    navBar: {
      flexDirection: 'column',
      padding: 16,
      flex: 0,
    },
    navHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 0,
    },
    userInfo: {
      flexDirection: 'column',
    },
    userName: {
      fontSize: 18,
      fontWeight: '600',
      color: '#ffffff',
      lineHeight: 18,
    },
    userPhone: {
      fontSize: 13,
      fontWeight: '400',
      color: '#ffffff',
    },
    changeButton: {
      width: 80,
      marginLeft: 16,
      padding: 7,
      borderRadius: 4,
      backgroundColor: 'white',
    },
    changeButtonText: {
      fontSize: 12,
      fontWeight: '600',
      color: "#00d1c1",
      textAlign: 'center'
    },
    inputContainer: {
      backgroundColor: '#00d1c1',
      borderRadius: 2,
      borderWidth: 0.25,
      height: 64,
      borderColor: 'white',
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: "stretch",
      marginTop: 16,
      marginBottom: 36,
      padding: 16,
    },
    inputs: {
      height: 64,
      marginLeft: 8,
      borderBottomColor: '#FFFFFF',
      flex: 1,
      fontSize: 24,
      color: "white",
      fontWeight: '600',
    },
    inputIcon: {
      width: 13,
      height: 20,
      justifyContent: 'center'
    },
    payModeContainer: {
      flexDirection: 'column',
      marginTop: -34,
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      margin: 16,
      shadowColor: '#f4f4f4',
      borderBottomWidth: 0,
      shadowOffset: { width: 5, height: 10 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
      elevation: 1,
      paddingTop: 8,
      paddingBottom: 8
    },
    payModeContainerTitle: {
      fontSize: 13,
      fontWeight: '400',
      color: '#77898a',
      marginLeft: 16,
      marginBottom: 8,
    },
    payModeContainerRadioGroup: {
      marginLeft: 8,
      marginTop: 8,
    },
    payModeContainerRadioText: {
      fontSize: 15,
      fontWeight: '600',
      color: '#344647',
      lineHeight: 16
    },
    payModeContainerRadioSubText: {
      fontSize: 13,
      fontWeight: '400',
      color: '#77898a',
    },
    payButtonTouch: {
      marginLeft: 16,
      marginBottom: 16,
      marginRight: 16,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: 5,
      shadowOffset: { width: 5, height: 10 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
      elevation: 1,
      shadowColor: '#4db6ac',
    },
    payButton: {
      bottom: 0,
      left: 0,
      right: 0,
      flex: 0,
      height: 52,
      padding: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    payButtonIcon: {
      width: 10,
      height: 12,
      marginRight: 4
    },
    closeButton: {
      width: 25,
      height: 25
    },
    payButtonText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: "white",
      textAlign: 'center'
    },
  });
  