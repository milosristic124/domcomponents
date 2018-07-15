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
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class Thumbanil extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
            <TouchableOpacity style={styles.box}>
                <ImageBackground resizeMode={'contain'} style={ styles.images } source={ this.props.src }>
                <View style={{flex: 1, flexDirection: 'column', }}>
                    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center',}}>
                        <Text style={{  fontSize: 20, marginTop: 20, marginLeft: 10, alignSelf: 'flex-start', color: '#FFFFFF'}}>date</Text>
                    </View>
                    { this.props.video ? 
                    <Image style={[styles.dollarbag, {flex:1, width: 50, height: 40, alignSelf: 'center', alignItems: 'center'}]} source={ require('../assets/play.png')}/>
                    :<View style={[styles.dollarbag, {flex:1, width: 50, height: 40, alignSelf: 'center', alignItems: 'center'}]} />}
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, marginRight: 10}}>
                        <View style={{ marginLeft: 10, marginTop: 10, alignSelf: 'flex-start', }}>
                            <Text style={{  fontSize: 20, alignSelf: 'flex-start', color: '#FFFFFF'}}>{this.props.tag}</Text>
                            <Text style={{  fontSize: 25, alignSelf: 'flex-end', color: '#FFFFFF'}}>tags</Text>
                        </View>
                        {this.props.shield && <Image style={[styles.dollarbag, {alignSelf: 'flex-end', marginBottom: 20,}]} source={ require('../assets/shield.png')}/>}
                    </View>       
                </View>             
                </ImageBackground>
            </TouchableOpacity>         
        );
    }
}
export default Thumbanil;

