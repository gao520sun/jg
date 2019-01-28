import React,{Component} from 'react'
import {
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation'
import TabNavigator from './TabBar'
import CustomDrawerComponent from './CustomDrawerComponent'
import Text1 from '../../Container/Text1'
import Text2 from '../../Container/Text2'
import LoginScreen from '../../Container/LoginContainer/LoginScreen'
import AuthLoading from '../AuthLoading'
const CustomDrawerContentComponent = (props) => (
    <CustomDrawerComponent navigation = {props.navigation}/>
);

const setStack = createStackNavigator({
    Text1:{screen:Text1},
    Text2:{screen:Text2},
});

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Text1:{screen:Text1},
});

const AppNavigator = createDrawerNavigator({
    Tab:{
        screen:TabNavigator
    },
    Settion:{
        screen: setStack
    }
}, {
        order: ['Tab', 'Settion'],//routeNames数组，用于定义抽屉项目的顺序。
        initialRouteName: 'Tab',//初始路由的routeName。
        // drawerLockMode: 'unlocked',//设置是否响应手势
        //'unlocked'   可以通过手势和代码 打开关闭抽屉
        //'locked-closed' 抽屉关闭状态  不能通过手势打开  只能通过代码实现
        //'locked-open'  抽屉打开状态  不能通过手势关闭  只能通过代码实现
        // drawerWidth: 250, //抽屉的宽度或返回的功能。
        drawerPosition: 'left', //选项是left或right。默认是left位置。
        // useNativeAnimations: false, //启用原生动画。默认是true。
        drawerBackgroundColor: 'white', //使用抽屉背景获取某种颜色。默认是white。
        //用于自定义
        contentComponent: CustomDrawerContentComponent,
    });
//切换重新走一遍
const switchNavigator =  createSwitchNavigator({
    AuthLoading:AuthLoading,
    App:AppNavigator,
    Auth: AuthStack,
})
export default createAppContainer(switchNavigator);
