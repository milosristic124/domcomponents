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

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.isChecked,
        }
    }
    
    componentDidMount() {
        
    }
    
    checkValue () {
        this.state.isChecked && this.setState({
            isChecked: false,
        });

        !this.state.isChecked && this.setState({
            isChecked: true,
        })
    }
    render() {
        return (
                <View style={styles.radioContainer}>
                    <TouchableOpacity style={styles.radioButton} onPress={ this.checkValue.bind(this)}>
                        <Image style={styles.tick} source={ this.state.isChecked ? require('../assets/tick.png') : null }/>
                    </TouchableOpacity>
                    <Text style={styles.radioLabel}>{this.props.label}</Text>
                </View>
            
        );
    }
}

export default Radio;

