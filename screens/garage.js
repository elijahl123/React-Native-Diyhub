import React, {Component} from "react";
import {Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SearchBar} from "react-native-elements";
import Collapsible from "react-native-collapsible";
import Constants from "expo-constants";
import styles from '../static/style'

export default class Garage extends Component {

    state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: false,
    };

    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    render() {
        return (
            <View style={styles.screen}>
                <StatusBar barStyle={"light-content"} backgroundColor={'#037f8c'} translucent={true} />
                <SearchBar
                    icon={{ type: 'font-awesome', name: 'search' }}
                    // onChangeText={}
                    // onClearText={}
                    placeholder='Search for Parts...'
                    style={styles.searchBar}
                />
                <TouchableOpacity onPress={this.toggleExpanded}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Single Collapsible</Text>
                    </View>
                </TouchableOpacity>
                <Collapsible collapsed={this.state.collapsed} align="center">
                    <View style={styles.content}>
                        <Text style={{fontFamily: 'Times New Roman',}}>
                            Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                            ribs
                        </Text>
                    </View>
                </Collapsible>
            </View>
        );
    }

}

