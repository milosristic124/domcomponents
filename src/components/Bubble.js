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

class Bubble extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View style={styles.multiChoiceContainer}>
                    { 
                        this.props.mode == 'bottom' ? <Image style={styles.userIcon} source={ require('../assets/usericon.png')}/>:
                        <View style={styles.userIcon} />
                    }
                    <View style={[styles.choiceMain]}>
                        <View style={this.props.mode !== 'bottom' ? 
                        [styles.choiceHeader, { width: 350, paddingBottom: 80, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}]
                        : [styles.choiceHeader, { width: 350, paddingBottom: 80,  borderBottomRightRadius: 20}] }>
                            <Text style={styles.headerText}>{this.props.content}</Text>
                        </View>
                    </View>
                </View>
            
        );
    }
}

export default Bubble;

