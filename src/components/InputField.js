import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class InputField extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View style={styles.inputfieldContainer}>
                    <Text style={styles.header}>TEXT INPUT 1</Text>
                    <TextInput style={styles.inputField} placeholder={'Type text here..'} placeholderTextColor={'#9A9FA7'}/>
                </View>
            
        );
    }
}

export default InputField;

