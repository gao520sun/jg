import {Component} from "react";
import {Button, ScrollView, StyleSheet, Text, View,AsyncStorage} from "react-native";
import React from "react";
import {
    SafeAreaView,
} from 'react-navigation'
type Props = {};
export default class CustomDrawerComponent extends Component<Props> {
    _signOutAsync = async () => {
        await AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Auth');
    };
    render() {
        return (
            <ScrollView style={styles.scrollView_container}>
                <SafeAreaView style={styles.safeAreaView_container} forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Button title = {'注销登录'}  onPress = {this._signOutAsync.bind(this)}  style={{width:200,height:100,backgroundColor:'red'}}/>
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView_container: {
        backgroundColor:'#987656',
        flex:1
    },
    safeAreaView_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
