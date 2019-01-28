/**
 *  Class: BaseView
 *  Author: GAOZHONGLEI
 *  Date: 2018/8/17.
 *  Description: 都使用箭头函数 funNmae = () =>{}
 *  component: 调用组件 先定义 ref = {name => this.name = name} 使用this.name获取组件发方法和变量
 *  子组件   : 参考demo
 */
import React, {Component} from 'react';
//react-native导入
import {StyleSheet, View} from 'react-native';
//第三发库导入

//公共组件导入
//子组件导入

//api导入

//图片导入(使用例子:import feed from './source/image/zcr/feed_button_yy.png'')

//变量定义

export default class BaseView extends Component {

    constructor(props) {
        super(props);
        //初始化
        this.state = {}
        //返回给父组件的数据
        this.callbackValue = () => {
            //TODO code
        }
        //othe
    }

    static propTypes = {};
    static defaultProps = {};

    //region 生命周期
    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    //endregion
    //region 逻辑处理地方

    //endregion

    //region 编写view地方
    /**
     * 是否显示加载框
     * */
    showLoadingView = (show=false, params={}) => {
    };
    toastShortView = (msg = '') =>{
    };
    //endregion

    //region othe

    //endregion

    render() {
        return (
            <View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
