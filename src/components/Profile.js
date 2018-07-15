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

class Profile extends Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
                <View style={styles.profileContainer}>
                    <View style={styles.profileLeft}>
                        <Text style={ this.props.isActive ? [styles.number, { color: '#ED4756'}] : styles.number }>{this.props.number}</Text>
                        <Image style={styles.avatar} source={ this.props.avatar }/>
                        <Text style={ this.props.isActive ? [styles.profileName, { color: '#ED4756'}] : styles.profileName }>{this.props.name}</Text>
                    </View>
                    <Text style={ this.props.isActive ? [styles.value, { color: '#ED4756'}] : styles.value }>{this.props.value}</Text>
                </View>
            
        );
    }
}

export default Profile;

