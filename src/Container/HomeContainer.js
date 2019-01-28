import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {observer} from 'mobx-react'
type Props = {};
import {changeTitle,OrderLine} from '../Model/TestModel'
@observer
export default class HomeContainer extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            title:'1'
        };
    }
    onPress = () =>{
        this.props.navigation.navigate('Text1')
        // this.props.navigation.openDrawer();
    };
    onPress1 = () =>{
        changeTitle.addNumber();
    };

    onPress2 = () =>{
        changeTitle.jianNumber();
    };
    onOrderLine = () =>{
        OrderLine.price = 2;
    }
    render() {
        return (
            <View style={styles.container}>
                <Text onPress = {this.onPress.bind(this)} style={styles.welcome}>Welcome to React Native!</Text>
                <Text onPress = {this.onPress1.bind(this)} style={styles.instructions}>To get started, edit App.js</Text>
                <Text onPress = {this.onPress2.bind(this)} style={styles.instructions}>{changeTitle.title}</Text>
                <Text onPress = {this.onOrderLine.bind(this)} style={styles.instructions}>{OrderLine.price}</Text>
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
