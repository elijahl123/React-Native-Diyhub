import React, {Component} from "react";
import {StatusBar, Text, TouchableOpacity, View} from "react-native";
import {SearchBar} from "react-native-elements";
import Collapsible from "react-native-collapsible";
import styles from '../static/style'
import {primaryColor} from "../static/style";
import {Montserrat_400Regular} from "@expo-google-fonts/dev";
import Accordion from 'react-native-collapsible/Accordion'

const SECTIONS = [
    {
      title: 'First',
      content: 'Lorem ipsum...',
    },
    {
      title: 'Second',
      content: 'Lorem ipsum...',
    },
  ];

export default class Garage extends Component{

    state = {
        activeSections: [],
      };

      _renderSectionTitle = section => {
        return (
          <View style={styles.content}>
            <Text>{section.content}</Text>
          </View>
        );
      };

      _renderHeader = section => {
        return (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        );
      };
    
      _renderContent = section => {
        return (
          <View style={styles.content}>
            <Text>{section.content}</Text>
          </View>
        );
      };
    
      _updateSections = activeSections => {
        this.setState({ activeSections });
      };

        render() {
            return (
                <View style={styles.screen}>
                    <StatusBar barStyle={"light-content"} backgroundColor={primaryColor} translucent={true} />
                    <SearchBar
                        icon={{ type: 'font-awesome', name: 'search' }}
                        // onChangeText={}
                        // onClearText={}
                        placeholder='Search for Parts...'
                        style={styles.searchBar}
                    />
                    < Accordion
                    sections = {
                        SECTIONS
                    }
                    activeSections = {
                        this.state.activeSections
                    }
                    renderHeader = {
                        this._renderHeader
                    }
                    renderContent = {
                        this._renderContent
                    }
                    onChange = {
                        this._updateSections
                    }
                    />
                </View>
            );
        }

}

