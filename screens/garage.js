import React, {Component} from "react";
import {Text, View} from "react-native";
import {SearchBar, CheckBox} from "react-native-elements";
import styles from '../static/style'
import {primaryColor} from "../static/style";
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
    {
      title: 'General',
        parts: ['Part 1', 'Part 2', 'Part 3'],
    },
    {
      title: 'Circuits',
        parts: ['Part 4'],
    },
  ];




export default class Garage extends Component{

    state = {
        activeSections: [],
        search: '',
        checked: false,
      };

    handleOnPress = () => this.setState({checked: !this.state.checked})


    updateSearch = (search) => {
        this.setState({ search });
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
            <CheckBox
                checked={this.state.checked}
                title={section.parts[0]}
                checkedColor={primaryColor}
                iconType='font-awesome-5'
                checkedIcon='check-square'
                uncheckedIcon='square'
                onPress={() => this.setState({checked: !this.state.checked})}
            />
          </View>
        );
      };

      _updateSections = activeSections => {
        this.setState({ activeSections });
      };

        render() {
            const { search } = this.state;
            return (
                <View style={styles.screen}>
                    <SearchBar
                        icon={{ type: 'font-awesome', name: 'search' }}
                        // onChangeText={}
                        // onClearText={}
                        placeholder='Search for Parts...'
                        style={styles.searchBar}
                        onChangeText={this.updateSearch}
                        value={search}
                        lightTheme={true}
                    />
                    <Accordion
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

