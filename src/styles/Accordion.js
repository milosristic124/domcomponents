import { 
    StyleSheet, 
    Dimensions, 
    Platform 
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
const {width, height} = Dimensions.get('window');
var headerTitleWidth = deviceWidth-120;

module.exports = StyleSheet.create({
    container: {
        height: height,
        paddingLeft: 60,
        flex: 1,
        flexDirection: 'row',
    },

    left: {
        flex: 1,
        marginTop: 100,
        width: width/2,
        //backgroundColor: 'blue'
    },

    right: {
        flex: 1,
        marginTop: 50,
        width: width/2,
        paddingRight: 30,
        //backgroundColor: 'green'
    },

    socialLogin: {
        backgroundColor: 'white',
    },

    facebook: {
        marginRight: 60,
        marginTop: 20,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#3B5998',
        flexDirection: 'row',
        alignContent: 'center',
    },
    
    twitter: {
        marginRight: 60,
        marginTop: 20,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#55ACEE',
        flexDirection: 'row',
        alignContent: 'center',
    },

    google: {
        marginRight: 60,
        marginTop: 20,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#FBBC05',
        flexDirection: 'row',
        alignContent: 'center',
    },

    instagram: {
        marginRight: 60,
        marginTop: 20,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#E13B61',
        flexDirection: 'row',
        alignContent: 'center',
    },

    buttonImage: {
        marginLeft: 20,
        alignSelf: 'center',
    },

    buttonText: {
        marginLeft: 40,
        color: '#FFFFFF',
        fontSize: 27,
        alignSelf: 'center',
    },

    dollarBagContainer: {
        width: width/2,
        backgroundColor: 'white',
        marginTop: 50,
        paddingLeft: 20,
        flexDirection: 'row',
        alignContent: 'center',
    },

    price: {
        alignSelf: 'center',
        fontSize: 19,
        color: '#00BAE8'
    },

    dollarBag: {
        alignSelf: 'center',
    },

    inputfieldContainer: {
        width: width/2,
        backgroundColor: 'white',
        marginTop: 50,
        paddingLeft: 20,
    },

    header: {
        fontSize: 22,
        fontWeight: '600',
        color: '#9A9FA7',
        letterSpacing: 5,
    },
    inputField: {
        height: 50,
        fontSize: 22,
        color: '#9A9FA7',
        borderBottomWidth: 3,
        borderBottomColor: '#9A9FA7',
    },

    radioSelectionContainer: {
        width: width/2,
        height: height/5,
        backgroundColor: 'white',
        marginTop: 50,
        paddingLeft: 20,
    },

    radioHeader: {
        fontSize: 24,
        fontWeight: '600',
        color: '#9A9FA7',
        letterSpacing: 4,
    },
    
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
    },

    radioButton: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#9A9FA7',
        justifyContent: 'center',
        alignItems: 'center',
    },

    tick: {
        width: 25,
        height: 25,
        alignSelf: 'center',        
    },

    radioLabel: {
        marginLeft: 20,
        alignSelf: 'center',
        fontSize: 26,
        color: '#9A9FA7',
    },
    
    domButton: {
        width: 400,
        borderRadius: 40,
        marginTop: 30,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#B9C0C7',
        justifyContent: 'center',
        alignItems: 'center',
    },

    domText: {
        fontSize: 30,
        color: '#FFFFFF'
    },

    profileListContainer: {
        width: width/2,
        marginTop: 20,
        paddingRight: 100,
    },

    profileContainer: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    profileLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    number: {

    },

    avatar: {
        marginLeft: 10,
        alignItems: 'flex-start'
    },
    
    profileName: {
        marginLeft: 10,
        color: '#262626',
        fontSize: 27,
    },

    value: {
        alignItems: 'flex-end',
        color: '#00BAE8',
        fontSize: 20,
    },

    galleryContainer: {
        flex: 1,

        marginTop: 100,
    },

    row : {
        flex: 1,
        flexDirection: 'row',
    },
    
    box: {
        //flex: 1,
        width: '50%',
        height: 250,
        margin: 2,
        flexDirection: 'row',
    },
    
    images: {
        width: '100%',
        height: '100%',
        
    },

    checkButton: {
        width: 200,
        height: 200,
        borderRadius: 200,
        backgroundColor: '#9A9FA7',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#00BAE8'
    },

    tickBig: {
        // width: 25,
        // height: 25,
        alignSelf: 'center',        
    },
    avatarContainer: {
        width: 150,
        height: 150,
        borderRadius: 150,
        backgroundColor: '#B9C0C7',
        justifyContent: 'center',
        alignItems: 'center'
    },

    avatarImage: {
        width: 145,
        height: 145,
        alignSelf: 'center'
    },

    multiChoiceContainer: {
        flex: 1,
        marginRight: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    userIcon: {
        alignSelf: 'flex-end'
    },

    choiceMain: {
        marginLeft: 20,
        marginTop: 40,
    },

    choiceHeader: {
        backgroundColor: '#F1F0F0',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },

    headerText: {
        fontSize: 25,
        fontWeight: '500'
    },

    choiceSelect: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: '#EDEDED',
        borderLeftWidth: 2,
        borderRightColor: '#EDEDED',
        borderRightWidth: 2,
        borderBottomColor: '#EDEDED',
        borderBottomWidth: 2,
    },

    option: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        borderBottomColor: '#EDEDED',
        borderBottomWidth: 2,
        paddingTop: 20,
        paddingBottom: 20,
    },

    optionText: {
        fontSize: 25,
        color: '#00BAE8'
    },

    buttonSelect: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: '#EDEDED',
        borderLeftWidth: 2,
        borderRightColor: '#EDEDED',
        borderRightWidth: 2,
        borderBottomColor: '#EDEDED',
        borderBottomWidth: 2,
        padding: 20,
    },

    selectButton: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#00BAE8',
        borderRadius: 15,
    },

    buttonGroup: {
        flex: 1,
        marginLeft: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    normalButton: {
        width: 200,
        borderRadius: 40,
        marginTop: 30,
        marginLeft: 5,
        paddingTop: 15,
        paddingBottom: 15,
        borderColor: '#00BAE8',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    impBubbleContainer: {
        flex: 1,
        marginRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    userIcon: {
        alignSelf: 'flex-end'
    },

    impBubbleMain: {
        marginLeft: 10,
        marginTop: 40,
    },

    impBubbleHeader: {
        backgroundColor: '#672267',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 40,
        paddingBottom: 50,
    },

    impBubbleText: {
        fontSize: 25,
        fontWeight: '500',
        color: '#FFFFFF'
    },

    addButton :{
        width: 150,
        height: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        position: 'absolute',
        marginTop: 100,
        right: -80,
    },

    addIcon: {
        marginLeft: 10,
        marginTop: 10,
    },

    bottomBarContainer: {
        flex: 1,
        width: '100%',
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FAFAFA',
        borderTopColor: '#979797',
        borderTopWidth: 4,
        paddingTop: 10,
    },

    bottomItem: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center'
    },

    bottomImage: {
        alignSelf: 'center'
    }
});