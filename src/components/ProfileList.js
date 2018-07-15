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

import Profile from './Profile';
import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class ProfileList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        }
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View style={styles.profileListContainer}>
                    <Profile number={1} avatar={ require('../assets/avatar.png') } name={'Name'} value={'11300'}/>
                    <Profile number={2} avatar={ require('../assets/avatar.png') } name={'Name'} value={'7900'}/>
                    <Profile number={3} avatar={ require('../assets/avatar.png') } name={'Name'} value={'6400'}/>
                    <Profile number={4} avatar={ require('../assets/avatar.png') } name={'Active Name'} value={'5500'} isActive={true}/>
                </View>
            
        );
    }
}

export default ProfileList;

