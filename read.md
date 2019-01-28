yarn add react-navigation
yarn add mobc
yarn add mobx-react
yarn add  babel-plugin-transform-decorators-legacy babel-preset-react-native-stage-0 --dev
修改babel.config.js  "plugins": [
                           ["@babel/plugin-proposal-decorators", { "legacy": true }]
                       ]
react-navigation3.0版本报错undefined is not an object (evaluating 'RNGestureHandlerModule.State'
安装yarn add react-native-gesture-handler react-native link react-native-gesture-handler

