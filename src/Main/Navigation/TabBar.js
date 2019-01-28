import React,{Component} from 'react'
import {
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation'
import {Image,Text} from 'react-native'
import HomeContainer from '../../Container/HomeContainer'
import MessageContainer from '../../Container/MessageContainer'
import PatientContainer from '../../Container/PatientContainer'
import PersonageContainer from '../../Container/PersonageContainer'
import Text1 from '../../Container/Text1'
import Text2 from '../../Container/Text2'

const TabBarItem = (focused,normalImage,selectedImage) =>{
    return  <Image
        source={!focused ? normalImage : selectedImage}
        style={{width: 25,height: 25}}
    />
};
const HomeStack = createStackNavigator({
    Home:{screen:HomeContainer},
    Text1:{screen:Text1}
});
HomeStack.navigationOptions = ({navigation})=>{
    let tabBarVisible = true;
    if(navigation.state.index > 0){
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    }
};

const MessageStack = createStackNavigator({
    Message:{screen:MessageContainer},
    Text1:{screen:Text1}
});
MessageStack.navigationOptions = ({navigation})=>{
    let tabBarVisible = true;
    if(navigation.state.index > 0){
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    }
};

const PatientStack = createStackNavigator({
    Patient:{screen:PatientContainer},
    Text2:{screen:Text2},
    Text1:{screen:Text1}
});
PatientStack.navigationOptions = ({navigation})=>{
    let tabBarVisible = true;
    if(navigation.state.index > 0){
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    }
};

const PersonageStack = createStackNavigator({
    Personage:{screen:PersonageContainer},
    Text2:{screen:Text2}
});
PersonageStack.navigationOptions = ({navigation})=>{
    let tabBarVisible = true;
    if(navigation.state.index > 0){
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    }
};
const TabNavigator =createBottomTabNavigator(
    {
        Home: HomeStack,
        Message:MessageStack,
        Patient: PatientStack,
        Personage: PersonageStack
    },
    {
        initialRouteName: 'Home',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: false,
        // tabBarOptions: tabBarOptions,
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routes ,index} = navigation.state;
                let iconName;
                let selectName;
                switch (routes[index]['routeName']) {
                    case 'Home':
                        iconName =  require('../../Image/home.png');
                        selectName =  require('../../Image/home_active.png');
                        break;
                    case 'Message':
                        iconName =  require('../../Image/message.png');
                        selectName =  require('../../Image/message_active.png');
                        break;
                    case 'Patient':
                        iconName =  require('../../Image/chat.png');
                        selectName =  require('../../Image/chat_active.png');
                        break;
                    case 'Personage':
                        iconName =  require('../../Image/me.png');
                        selectName =  require('../../Image/me_active.png');
                        break;
                }
                return TabBarItem(focused,iconName,selectName)
            },
            tabBarLabel:({focused})=>{
                let name;
                const { routes ,index} = navigation.state;
                switch (routes[index]['routeName']) {
                    case 'Home':
                       name = '首页';
                        break;
                    case 'Message':
                        name = '消息';
                        break;
                    case 'Patient':
                        name = '患者';
                        break;
                    case 'Personage':
                        name = '个人';
                        break;
                }
                return  <Text style = {{fontSize:12,color:focused?'#32a4f2':'#8e8e8e'}}>{name}</Text>
            }
        }),
    }
);



export default TabNavigator




