import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {observer} from "mobx-react";
import {changeTitle} from '../Model/TestModel'
type Props = {};
@observer
export default class Text1 extends Component<Props> {

    onPress = () =>{
        changeTitle.jianNumber();
    };
    render() {
        return (
            <View style={styles.container}>
                <Text onPress = {this.onPress.bind(this)} style={styles.welcome}>ttttttext1Welcome to React Native!</Text>
                <Text style={styles.instructions}>{changeTitle.title}</Text>
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
