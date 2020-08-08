import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme, Link} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {StatusBar, View} from 'react-native';
import Garage from './screens/garage';
import Create from "./screens/create";
import Discover from "./screens/discover";
import Profile from "./screens/profile";
import {Image} from "react-native";
import styles, {primaryColor} from './static/style'
import {Icon} from "react-native-elements";


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#037f8c',
        background: '#1b262c',
        text: '#FFF',
    },
}

const Tab = createMaterialBottomTabNavigator();

class Tabs extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Discover"
                activeColor="#FFF"
                barStyle= {{
                    backgroundColor: '#037F8C',
                }}
            >
                <Tab.Screen
                    name="Garage"
                    component={Garage}
                    options={{
                        tabBarLabel: 'Garage',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="warehouse" color={color} size={26} />
                        ),


                    }}

                />
                <Tab.Screen
                    name="Create"
                    component={Create}
                    options={{
                        tabBarLabel: 'Create',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Discover"
                    component={Discover}
                    options={{
                        tabBarLabel: 'Discover',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="compass" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}

export default function App() {
    return (
        <NavigationContainer theme={theme}>
            <StatusBar barStyle={"light-content"}/>
            <View style={styles.imgContainer}>
                <Icon name={"chevron-left"} type={'font-awesome'} style={{paddingLeft: 10, opacity: 0}}
                      color={'#F2D8C2'}/>
                <Image source={require('./img/name.png')} style={styles.img}/>
                <Icon name={"cog"} type={"font-awesome"} style={{paddingRight: 10}} color={'#F2D8C2'}/>
            </View>
            <Tabs/>
        </NavigationContainer>
    );
}

