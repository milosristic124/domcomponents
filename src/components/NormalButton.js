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

class NormalButton extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <TouchableOpacity style={ this.props.isActive ? [styles.normalButton, { backgroundColor: '#FFFFF'}]: [styles.normalButton, {borderColor: '#B9C0C7'}]}>
                    <Text style={this.props.isActive ? [styles.domText, { color: '#00BAE8'}]: [styles.domText, { color: '#B9C0C7'}]}>{ this.props.label }</Text>
                </TouchableOpacity>
            
        );
    }
}

export default NormalButton;

