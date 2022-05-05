const path = require('path')
const ruleForStyles = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
   }
const ruleForIMG={
    test: /\.(png|jpe?g|gif)$/i,
    use:[
        {
            loader:'file-loader'
        }
    ]
}
module.exports = {
    mode:"develpment",
    devServer:{
        static:'./build'
    },
    output: {
     path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
        {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react']
                }
            },ruleForStyles,ruleForIMG

        ]
    }
}