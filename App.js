/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Slider,
  Picker,
  ImageBackground,
  Alert,
  View
} from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      random: null,
      pool: 1,
      amount: 1
    };
  }
  generateRandomNumber = () => {
    // warn if pool is smaller than the amount of numbers
    if(this.state.amount > this.state.pool) {
      Alert.alert("Error", "The range must not be smaller than the amount of numbers you want to generate!");
      return;
    }
    // build the pool of numbers
    var pool = [];
    for(let i = 1; i <= this.state.pool; i++) {
      pool.push(i);
    }

    // generate random numbers
    var randomString = '';
    for(let i = 1; i <= this.state.amount; i++) {
      let index = Math.floor(Math.random() * pool.length);
      let random = pool[index];
      pool.splice(index, 1);
      randomString = randomString + (randomString ? ", " : "") + random;
    }
    this.setState({random: randomString});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Random Number Generator
        </Text>
        <Text>Number range:</Text>
        <Text>{this.state.pool}</Text>
        <Slider style={{width: '100%'}} minimumValue={1} maximumValue={100} onValueChange={(value) => this.setState({pool: Math.round(value)})} />
        <Text>How many numbers to generate?</Text>
        <Picker selectedValue={this.state.amount} style={styles.picker} onValueChange={(itemValue, itemIndex) => this.setState({amount: itemValue})}>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
        </Picker>
        <Text>{this.state.random}</Text>
        <TouchableOpacity onPress={this.generateRandomNumber}>
          <ImageBackground style={styles.button} source={require('./button.png')}>
            <Text style={styles.buttonText}>Generate</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ccc',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    paddingBottom: 30,
    width: null,
    height: null
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 175,
    height: 60
  },
  picker: {
    width: 50,
    borderColor: '#999999',
    borderWidth: 2,
    backgroundColor: '#FFFFFF'
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: '#00000000'
  }

});
