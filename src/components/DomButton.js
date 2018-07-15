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

class DomButton extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <TouchableOpacity style={ this.props.isActive ? [styles.domButton, { backgroundColor: '#00BAE8'}]: styles.domButton}>
                    <Text style={styles.domText}>{ this.props.isActive ? 'Active Button': 'Inactive Button' }</Text>
                </TouchableOpacity>
            
        );
    }
}

export default DomButton;

