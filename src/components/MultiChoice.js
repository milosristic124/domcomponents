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

class MultiChoice extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View style={styles.multiChoiceContainer}>
                    <Image style={styles.userIcon} source={ require('../assets/usericon.png')}/>
                    <View style={styles.choiceMain}>
                        <View style={styles.choiceHeader}>
                            <Text style={styles.headerText}>Multiple choice question text lorem ipsum dolor sit amet lorem ipsum dolor sit amet…</Text>
                        </View>
                        <View style={[styles.choiceSelect, {borderBottomRightRadius: 20}]}>
                            <TouchableOpacity style={styles.option}>
                                <Text style={styles.optionText}>Option</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option}>
                                <Text style={styles.optionText}>Option</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.option, {borderBottomWidth: 0}]}>
                                <Text style={styles.optionText}>Option</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                </View>
            
        );
    }
}

export default MultiChoice;

