/**
 *  Class: BaseComponents
 *  Author: GAOZHONGLEI
 *  Date: 2018/7/17.
 *  Description: 都使用箭头函数 funNmae = () =>{}
 *  component: 调用组件 先定义 ref = {name => this.name = name} 使用this.name获取组件发方法和变量
 *  子组件   : 参考demo
 */
import React, {Component} from 'react';
//react-native导入
import {StyleSheet, View,StatusBar,Platform} from 'react-native';
//第三发库导入

//公共组件导入
//子组件导入
//api导入
//图片导入(使用例子:import feed_button_yy from '../../../../../source/image/zcr/feed_button_yy.png')
//变量定义

export default class BaseComponents extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: ''
        };
    };

    constructor(props) {
        super(props);
        //初始化
        this.state = {};
        this.renderBody = this.renderBody.bind(this);
        this.onLeftPressed = this.onLeftPressed.bind(this);
        this.onRightPressed = this.onRightPressed.bind(this);
        this.pushPageContainer = this.pushPageContainer.bind(this);
        this.replacePageContainer = this.replacePageContainer.bind(this);
        this.popPageContainer = this.popPageContainer.bind(this);
        this.popPageContainerByIndex = this.popPageContainerByIndex.bind(this);
        this.goCallback = this.goCallback.bind(this);
        this.didBlur  = () =>{};
        this.didFocus = () =>{};
        this.navigation = this.props.navigation;
        this.navListener();
    }

    static propTypes = {};
    static defaultProps = {};
    /***
     * 统一获取数据
     */
    getData = () => {};

    goCallback(){}

    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {
        this.didBlurSubscription&& this.didBlurSubscription.remove();
        this.didFocusSubscription&& this.didFocusSubscription.remove();
    }

    //逻辑处理地方

      navListener = () =>{
          const {navigation} = this.props;
          //离开页面
          this.didBlurSubscription = navigation.addListener('didBlur', payload => {this.didBlur(payload)});
          //进入当前页面
          this.didFocusSubscription = navigation.addListener('didFocus', payload => {this.didFocus(payload)});
      };

    //end

    //编写view地方
    /**
     * 页面入栈
     * */
    pushPageContainer = (pageContainer='', params={}) => {
        this.props.navigation.push(pageContainer,{...params,goCallback:this.goCallback});
    };
    /**
     * 页面替换
     * */
    replacePageContainer = (pageContainer='', params={}) => {
        this.props.navigation.replace(pageContainer, {...params,goCallback:this.goCallback});
    };
    /**
     * 页面出栈
     * */
    popPageContainer = () => {
        this.props.navigation.goBack(null);
    };
    /**
     * 页面出栈
     * */
    popToPageContainer = () => {
        this.props.navigation.popToTop();
    };
    /**
     * 是否显示加载框
     * */
    showLoadingView = (show=false, params={}) => {};

    /**
     * 页面出栈
     * router 传入 this.props.router
     * index  传入想要回退几层   不可以传0  不可以传超过栈的数
     * */
    popPageContainerByIndex = (router,index,parms={}) => {

        if(router && router.hasOwnProperty("routes")){
            let router_data = router["routes"];
            const key = router_data[router_data.length-index].key;
            const goCallback = router_data[router_data.length-index].params.goCallback;
            if(goCallback && typeof goCallback === "function"){
                goCallback({...parms});
            }
            this.props.navigation.goBack(key);
        }
    };

    toastShortView = (msg = '') =>{

    };
    //end
    onLeftPressed() {}

    onRightPressed() {}
    /**
     * 控制状态栏显示样式（子类可重写）
     * */
    renderStatusBar(props={}) {
        return <StatusBar animated={true} barStyle="dark-content" backgroundColor="#6CB9FF" {...props}/>
    }
    /**
     * 针对iOS设备，仅在导航栏隐藏状态下使用，默认渲染状态栏背景（子类可重写）
     * */
    renderIOSStatusBarBG(style={}) {
        return Platform.OS === 'ios' ? <View style={[styles.status_bar, style]}/> : null
    }

    /**
     * 子类必须重写此方法以渲染页面（不推荐直接重写 render）
     * */
    renderBody() {return null;}

    render() {
        return (
            <View style={styles.root_container}>
                {this.renderStatusBar()}
                {this.renderBody()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root_container: {
        position: 'relative',
        flex: 1,
        width: '100%',
        backgroundColor: '#f7f8fb',
    },
    status_bar: {
        height: 20,
        marginTop: 0,
        backgroundColor: '#449aff',
    }
});
