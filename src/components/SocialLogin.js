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

class SocialLogin extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View style={styles.socialLogin}>
                    <TouchableOpacity style={styles.facebook}>
                        <Image style={styles.buttonImage} source={ require('../assets/facebook.png')}/>
                        <Text style={styles.buttonText}>Sign in with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.twitter}>
                        <Image style={styles.buttonImage} source={ require('../assets/twitter.png')}/>
                        <Text style={styles.buttonText}>Sign in with Twitter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.google}>
                        <Image style={styles.buttonImage} source={ require('../assets/google.png')}/>
                        <Text style={styles.buttonText}>Sign in with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instagram}>
                        <Image style={styles.buttonImage} source={ require('../assets/instagram.png')}/>
                        <Text style={styles.buttonText}>Sign in with Instagram</Text>
                    </TouchableOpacity>
                </View>
            
        );
    }
}

export default SocialLogin;

