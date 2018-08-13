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

import NormalButton from './NormalButton';
import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class ImportantBubble extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View>
                <View style={styles.impBubbleContainer}>
                    <Image style={styles.userIcon} source={ require('../assets/usericon.png')}/>
                    <View style={styles.impBubbleMain}>
                        <Text style={[styles.impBubbleText, {color: '#672267', marginBottom: 5, marginLeft: 10}]}>IMPORTANT</Text>
                        <View style={styles.impBubbleHeader}>
                            <Text style={styles.impBubbleText}>Important notification chat bubble</Text>
                        </View>
                        <View style={styles.addButton}>
                            <TouchableOpacity>
                            <Image style={styles.addIcon} source={ require('../assets/addButton.png')}/>
                            </TouchableOpacity>
                        </View>                        
                    </View>
                </View>
                </View>
            
        );
    }
}

export default ImportantBubble;

