const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require("path");

module.exports ={
    entry:{
        app: path.join(__dirname, './main.js') ,
    },
    module:{
        rules:[{
            test:/\.vue$/,
            loader: 'vue-loader',
        }],
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output:{
        filename : '[name].js',
        path: path.join(__dirname, './dist') ,
    },
};

//스크립트가 많아서 하나로 합치기 위해서 씀
