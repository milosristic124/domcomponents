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

import Radio from './Radio';
import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class RadioSelection extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View style={styles.radioSelectionContainer}>
                    <Text style={styles.radioHeader}>RADIO SELECTION</Text>
                    <View style={{ flexDirection: 'row', flex:1 }}>
                        <View style={{ flex: 1 }}>
                            <Radio label={'1'}/>
                            <Radio label={'2'}/>
                            <Radio label={'3'}/>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Radio label={'4'}/>
                            <Radio label={'5'}/>
                            <Radio label={'6'}/>
                        </View>
                    </View>
                </View>
            
        );
    }
}

export default RadioSelection;

