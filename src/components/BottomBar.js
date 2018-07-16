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

import Thumbnail from './Thumbnail';
import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class BottomBar extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View style={styles.bottomBarContainer}>         
                    <TouchableOpacity style={styles.bottomItem}>
                        <Image style={styles.bottomImage} source={ require('../assets/home.png') }/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomItem}>
                        <Image style={styles.bottomImage} source={ require('../assets/study.png') }/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomItem}>
                        <Image style={styles.bottomImage} source={ require('../assets/addbottom.png') }/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomItem}>
                        <Image style={styles.bottomImage} source={ require('../assets/star.png') }/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomItem}>
                        <Image style={styles.bottomImage} source={ require('../assets/bottomavatar.png') }/>
                    </TouchableOpacity>
                </View>
            
        );
    }
}

export default BottomBar;

