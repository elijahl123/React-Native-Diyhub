import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import styles, { backColor, primaryColor } from "../static/style";
import { Card, Icon } from "react-native-elements";

export default class Discover extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <ScrollView>
                <Card
                    containerStyle={styles.card}
                    title='Project Title'
                    titleStyle={styles.cardTitle}
                    wrapperStyle={styles.cardWrapper}
                    imageWrapperStyle={styles.cardImageWrapper}
                    imageStyle={styles.cardImage}
                    image={require('../img/ProjectImage.png')}>
                    <Text style={{marginBottom: 10, color: backColor,}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <View style={styles.cardViews}>
                    <Text style={styles.numberText}>
                        130
                    </Text>
                    <Icon name={"eye"} type={"font-awesome"} size={20}/>
                    <Text style={styles.numberText}>98 </Text>
                        <Icon name={"heart"} type={"font-awesome"} size={20} />
                    </View>
                </Card>
                <Card
                    containerStyle={styles.card}
                    title='Project Title'
                    titleStyle={styles.cardTitle}
                    wrapperStyle={styles.cardWrapper}
                    imageWrapperStyle={styles.cardImageWrapper}
                    imageStyle={styles.cardImage}
                    image={require('../img/ProjectImage.png')}>
                    <Text style={{marginBottom: 10, color: backColor,}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <View style={styles.cardViews}>
                        <Text style={styles.numberText}>
                            19
                        </Text>
                        <Icon name={"eye"} type={"font-awesome"} size={20}/>
                        <Text style={styles.numberText}>
                            23
                        </Text>
                        <Icon name={"heart"} type={"font-awesome"} size={20} />
                    </View>
                </Card>
                    <Card
                        containerStyle={styles.card}
                        title='Project Title'
                        titleStyle={styles.cardTitle}
                        wrapperStyle={styles.cardWrapper}
                        imageWrapperStyle={styles.cardImageWrapper}
                        imageStyle={styles.cardImage}
                        image={require('../img/ProjectImage.png')}>
                        <Text style={{marginBottom: 10, color: backColor,}}>
                            The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                        <View style={styles.cardViews}>
                            <Text style={styles.numberText}>
                                19
                            </Text>
                            <Icon name={"eye"} type={"font-awesome"} size={20}/>
                            <Text style={styles.numberText}>
                                23
                            </Text>
                            <Icon name={"heart"} type={"font-awesome"} size={20} />
                        </View>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}
