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

class MultiButtonChoice extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View>
                <View style={styles.multiChoiceContainer}>
                    <Image style={styles.userIcon} source={ require('../assets/usericon.png')}/>
                    <View style={styles.choiceMain}>
                        <View style={styles.choiceHeader}>
                            <Text style={styles.headerText}>Multiple choice question text lorem ipsum dolor sit amet lorem ipsum dolor sit amet…</Text>
                        </View>
                        <View style={[styles.buttonSelect, {borderBottomRightRadius: 20}]}>
                            <TouchableOpacity style={styles.selectButton}>                          
                            </TouchableOpacity> 
                            <TouchableOpacity style={styles.selectButton}>                          
                            </TouchableOpacity> 
                            <TouchableOpacity style={styles.selectButton}>                          
                            </TouchableOpacity> 
                        </View>
                    </View>
                </View>
                    <View style={styles.buttonGroup}>
                        <NormalButton label={'Button 1'} isActive={true}/>                   
                        <NormalButton label={'Button 2'} isActive={false}/>
                    </View>
                </View>
            
        );
    }
}

export default MultiButtonChoice;

