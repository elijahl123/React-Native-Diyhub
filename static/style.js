import {Dimensions, StyleSheet} from 'react-native';
import Constants from "expo-constants";

export const primaryColor = '#037f8c';
export const backColor = '#1b262c';
export const lightAccent = '#70B6B6';
export const darkAccent = '#5e8a95';
export const lightBack = '#f0e8ef';


export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: backColor,
        justifyContent: 'flex-start',
        width: Dimensions.get("screen").width,
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'column',
    },
    searchBar: {
        borderWidth: 0,
        borderColor: '#1b262c',
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: lightBack,
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: lightBack,
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
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
})
