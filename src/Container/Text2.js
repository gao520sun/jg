import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import React from "react";

type Props = {};
export default class Text2 extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>22222ttttttext1Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
