const path = require("path"); //a build in module in nodeJS
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//argument env's value is set by --env value.
module.exports = (env) => {
    const isProduction = env === "production";

    return {
        //input source file
        entry: path.join(__dirname, "src", "app.js"), //app.js
        //output bundle file
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: 'bundle.js'
        },
        //adding babel configuration
        module: {
            rules: [{
                loader: 'babel-loader',    //specify a loader
                test: /\.js$/,             //point out the file that loader has to compile
                exclude: /node_modules/    //if the file is under this path, then ignore it
            },{
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader",
                    ]
                })
            }]
        },
        plugins: [
            new ExtractTextPlugin("styles.css"),
        ],
        //devtool: 'cheap-module-eval-source-map',
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map', //use another kind of source map for production.
        //develop Server
        devServer: {
            contentBase: path.join(__dirname, "public"),
            disableHostCheck: true,
            historyApiFallback: true,
            publicPath: "/dist/"
        }
    };
};
