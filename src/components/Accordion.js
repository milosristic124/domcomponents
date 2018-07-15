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

import SocialLogin from './SocialLogin';
import DollarBag from './DollbarBag';
import InputField from './InputField';
import RadioSelection from './RadioSelection';
import Radio from './Radio';
import DomButton from './DomButton';
import ProfileList from './ProfileList';
import ImageGallery from './ImageGallery';
import CheckIcon from './CheckIcon';
import Avatar from './Avatar';
import MultiChoice from './MultiChoice';
import MultiButtonChoice from './MultiButtonChoice';
import ImportantBubble from './ImportantBubble';
import ImageBubble from './ImageBubble';
import Bubble from './Bubble';
import BottomBar from './BottomBar';

import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class Accordion extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
                <View style={styles.container}>
                    <ScrollView style={styles.left}>
                        <SocialLogin/>
                        <DollarBag price={1300}/>
                        <InputField/>
                        <RadioSelection/>
                        <Radio label={'Agree radio button'} isChecked={true}/>
                        <DomButton isActive={false}/>
                        <DomButton isActive={true}/>
                        <ProfileList/>
                        <ImageGallery/>
                    </ScrollView>
                    <View style={styles.right}>
                        <ScrollView style={styles.right}>
                            <CheckIcon/>
                            <View style={{flexDirection : 'row', justifyContent: 'space-between'}}>
                                <Avatar/>
                                <Avatar isActive={true}/>
                            </View>
                            <View style={{ marginTop: 50, }}>
                                <MultiChoice />
                                <MultiButtonChoice/>
                            </View>
                            <ImportantBubble/>
                            <ImageBubble src={require('../assets/imagebubble.png')}/>
                            <Bubble content={'Generic chat bubble top'}/>
                            <Bubble content={'Generic chat bubble bottom'} mode={'bottom'}/>
                            <BottomBar/>
                        </ScrollView>
                    </View>
                </View>
            
        );
    }
}

export default Accordion;

