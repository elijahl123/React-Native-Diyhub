import {Dimensions, StyleSheet} from 'react-native';
import Constants from "expo-constants";

export const primaryColor = '#037f8c';
export const backColor = '#1b262c';
export const lightAccent = '#70B6B6';
export const darkAccent = '#5e8a95';
export const lightBack = '#f0e8ef';
export const altColor = '#F2D8C2';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: backColor,
        justifyContent: 'flex-start',
        width: Dimensions.get("screen").width,
        flexDirection: 'column',
    },
    img: {
        width: 2271 / 15,
        height: 500 / 15,
    },
    imgContainer: {
        justifyContent: 'space-between',
        backgroundColor: primaryColor,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        paddingBottom: Constants.statusBarHeight / 3,
        flexDirection: 'row',
    },
    searchBar: {
        borderWidth: 0,
        borderColor: lightBack,
        margin: 0,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: lightBack,
        padding: 20,
        borderColor: 'white',
        borderBottomWidth: .5,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '300',
    },
    content: {
        backgroundColor: lightBack,
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgb(245,252,255)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: lightBack,
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
    card: {
        backgroundColor: lightBack,
        borderWidth: 0,
        borderRadius: 10,
        display: 'flex',
        margin: 10,
    },
    cardTitle: {
        fontSize: 15,
    },
    cardWrapper: {
        borderWidth: 0,
    },
    cardImage: {
        resizeMode: 'center',
    },
    cardImageWrapper: {

    },
    cardViews: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        flex: 1,

    },
    numberText: {
        paddingRight: 5,
        paddingLeft: 20,
    },
    icons: {

    },
    profilePage: {
        flex: 1,
        backgroundColor: lightBack,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageAndName: {
        margin: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    username: {
        fontWeight: '500',
        fontSize: 25,
        padding: 10,
    }
})
