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

class DollarBag extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View style={styles.dollarBagContainer}>
                    <Text style={styles.price}>{this.props.price}</Text>
                    <Image style={styles.dollarbag} source={ require('../assets/dollarbag.png')}/>
                </View>
            
        );
    }
}

export default DollarBag;

