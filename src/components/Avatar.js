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

class Avatar extends Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
                <View style={ this.props.isActive ? [styles.avatarContainer, {backgroundColor: 'red'}] : styles.avatarContainer }>
                    <Image resizeMode={'cover'}  style={styles.avatarImage} source={ require('../assets/avatar.png') }/>
                </View>
            
        );
    }
}

export default Avatar;

