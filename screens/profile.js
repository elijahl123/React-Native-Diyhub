import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "../static/style";
import {Avatar} from "react-native-elements";

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.profilePage} >
                <View style={styles.imageAndName}>
                    <Avatar
                        source={require('../img/img_avatar.png')}
                        size={75}
                        rounded={true}
                        showAccessory={true}
                        icon={{name:"user-circle", type:"font-awesome-5"}}
                    />
                    <Text style={styles.username}>
                        elijahl123
                    </Text>
                </View>
            </View>
        );
    }
}
