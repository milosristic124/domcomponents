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

class ImageBubble extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View>
                <View style={styles.impBubbleContainer}>
                    <View style={styles.impBubbleMain}>
                        <View style={[styles.impBubbleHeader, {paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}]}>
                            <Image style={{}} source={ this.props.src}/>                    
                        </View>                   
                    </View>
                    <Image style={[styles.userIcon, { marginLeft: 20}]} source={ require('../assets/messageavatar.png')}/>                    
                </View>
                </View>
            
        );
    }
}

export default ImageBubble;

