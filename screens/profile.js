import React, {Component} from "react";
import {Image, ScrollView, Text, View} from "react-native";
import styles from "../static/style";
import {Avatar, Button, Card, Divider, Icon} from "react-native-elements";
import Grid from "react-native-grid-component";

export default class Profile extends Component {
    _renderItem = (data, i) => (
        <View key={i} style={styles.item}>
            <Image source={data.image} style={styles.imgGrid}/>
        </View>
    );
    _renderPlaceholder = i => <View style={styles.item} key={i} />;

    render() {
        return (
            <View style={styles.profilePage} >
                <ScrollView centerContent={true} style={styles.scrollView} bounces={false} >
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
                    <Text style={styles.bio}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <Button
                    title="Edit Profile"
                    icon={<Icon name={'pen'} type={'font-awesome-5'} color={'white'} size={15} style={{paddingLeft: 7,}}/>}
                    iconRight={true}
                    />
                    <View style={styles.gridContainer} >
                    <Text style={styles.gridHeader}>Projects</Text>
                        <Grid
                            style={styles.list}
                            renderItem={this._renderItem}
                            numColumns={2}
                            renderPlaceholder={this._renderPlaceholder}
                            data={[
                                {
                                    image: require('../img/ProjectImage.png')
                                },
                                {
                                    image: require('../img/post2.png')
                                },
                                {
                                    image: require('../img/placeholder.png')
                                }]}
                        />
                    </View>
                </View>
                </ScrollView>
            </View>
        );
    }
}
