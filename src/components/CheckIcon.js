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

class CheckIcon extends Component {
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
            <TouchableOpacity style={styles.checkButton} onPress={ this.checkValue.bind(this)}>
                <Image style={styles.tickBig} source={ this.state.isChecked ? require('../assets/tick_big.png') : null }/>
            </TouchableOpacity>
            
        );
    }
}

export default CheckIcon;

