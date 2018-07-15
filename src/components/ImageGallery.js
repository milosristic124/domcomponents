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

class ImageGallery extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View style={styles.galleryContainer}>
                    <View style={styles.row}>
                        <Thumbnail src={require('../assets/image1.png')} tag={'text'}/>
                        <Thumbnail src={require('../assets/image2.png')} tag={'text'}/>
                    </View>
                    <View style={styles.row}>
                        <Thumbnail src={require('../assets/image3.png')} tag={'text'} date={'date'} shield={true}/>
                        <Thumbnail src={require('../assets/image4.png')} tag={'text'} date={'date'} video={true}/>
                    </View>            
                </View>
            
        );
    }
}

export default ImageGallery;

