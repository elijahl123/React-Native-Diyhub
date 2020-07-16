import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import {useFonts, OpenSans_700Bold, OpenSans_400Regular } from '@expo-google-fonts/open-sans';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#037f8c',
        background: '#1b262c',
        text: '#FFF',
    },
}


function Search() {
    let [fontsLoaded] = useFonts({
        OpenSans_700Bold,
        Montserrat_400Regular
    });
    return (
        <View style={styles.screen}>
            <Text style={{ color: 'white'}}>Garage!</Text>
        </View>
    );
}

function Create() {
    return (
        <View style={styles.screen}>
            <Text style={{ color: 'white'}}>Create!</Text>
        </View>
    );
}

function Discover() {
    return (
        <View style={styles.screen}>
            <Text style={{ color: 'white'}}>Discover!</Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={styles.screen}>
            <Text style={{ color: 'white'}}>Profile!</Text>
        </View>
    );
}

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
    let [fontsLoaded] = useFonts({
        OpenSans_700Bold,
        Montserrat_400Regular
    });
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
                component={Search}
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

export default function App() {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
    });
    return (
        <NavigationContainer theme={theme}>
            <Tabs />
        </NavigationContainer>
    );}

const styles = StyleSheet.create({
   screen: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#1B262C'
   }
});
