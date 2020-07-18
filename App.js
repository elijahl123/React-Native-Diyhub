import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Garage from './screens/garage';
import Create from "./screens/create";
import Discover from "./screens/discover";
import Profile from "./screens/profile";

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
                initialRouteName="Feed"
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
                            <MaterialCommunityIcons name="home" color={color} size={26} />
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
                <Tabs />
            </NavigationContainer>
        );
}

