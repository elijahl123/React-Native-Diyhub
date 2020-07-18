import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "../static/style";

export default class Create extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text style={{ color: 'white'}}>Create!</Text>
            </View>
        );
    }
}
