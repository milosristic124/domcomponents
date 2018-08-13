/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';

import ImageRotation from './src/components/ImageRotation';
import flightsData from './config/data.json';

const {width, height} = Dimensions.get('window');

const summaryData = flightsData.flights[0].summary.categorySummaries;
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex:1 }}>    
          <ImageRotation/>
      </View>     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
