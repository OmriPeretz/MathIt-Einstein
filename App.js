import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Style from "./Style";
import InputButton from './src/InputButton';

export default class App extends React.Component {
    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}></View>
                <View style={Style.inputContainer}></View>
            </View>
        );
    }
}
