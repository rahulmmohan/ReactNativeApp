

import React, { Component } from 'react';
import { Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { Divider } from 'react-native-elements';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles/app_style';
import {Platform} from 'react-native';

export default class App extends Component {

  state = {
    name: 'Roshan Sam',
    phone: '9870763024',
    selectedIndex: 0
  };

  render() {
    const getPlatformTestId = (id) =>
      Platform.OS === 'ios' ? { testID: id } : { accessible: true, accessibilityLabel: id };

    /**
      * Adds a testID to the views on Android and iOS in their specific ways. On Android,
      * this will result in a ContentDescription on Debug builds (and no changes on live builds).
      */
    const setTestID = (id) =>
      __DEV__ ? getPlatformTestId(id) : null;


    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#4db6ac" barStyle="light-content" />

        <ImageBackground source={require('./assets/app_bar_bg.png')} style={styles.navBar}>

          <View style={styles.navHeader}>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{this.state.name}</Text>
              <Text style={styles.userPhone}>{this.state.phone}</Text>
            </View>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>CHANGE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ position: "absolute", right: 0 }}>
              <Image style={styles.closeButton} source={require('./assets/close.png')} />
            </TouchableOpacity>
          </View>

          <LinearGradient style={styles.inputContainer}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#03baac', '#02c4ce']}>
            <Image style={styles.inputIcon} source={require('./assets/rupee.png')} />
            <TextInput style={styles.inputs}
              {...setTestID("amountInputView")}
              placeholder="Enter Bill amount"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              placeholderTextColor="#99ffffff"
              onChangeText={(email) => this.setState({ email })} />
          </LinearGradient>
        </ImageBackground>

        <View style={styles.payModeContainer}>
          <Text style={styles.payModeContainerTitle}>Pay using</Text>
          <Divider style={{ backgroundColor: '#f4f4f4', height: 1 }} />
          <RadioGroup
            color='black'
            thickness={2}
            activeColor='#00d1c1'
            selectedIndex={this.state.selectedIndex}>
            <RadioButton
              style={styles.payModeContainerRadioGroup}
              value={"simpl"}>
              <View {...setTestID("paymentModeSimpl")}>
                <Text style={styles.payModeContainerRadioText}>Simpl: ₹2000 available</Text>
                <Text style={styles.payModeContainerRadioSubText}>₹1922 will be charged to your account</Text>
              </View>
            </RadioButton>
            <RadioButton
              style={styles.payModeContainerRadioGroup}
              value={"upi"}>
              <View  {...setTestID("paymentModeUPI")}>
                <Text style={styles.payModeContainerRadioText}>UPI</Text>
                <Text style={styles.payModeContainerRadioSubText}>A payment request will be sent to your VPA</Text>
              </View>
            </RadioButton>
          </RadioGroup>
        </View>

        <LinearGradient style={styles.payButtonTouch}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#00d1c1', '#00d1dc']}>
          <TouchableOpacity style={styles.payButton}  {...setTestID("payButton")}>
            <Image style={styles.payButtonIcon} source={require('./assets/lock.png')} />
            <Text style={styles.payButtonText}>PAY BILL</Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>
    );
  }
}
