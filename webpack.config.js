// webpack.config.js
const path = require('path'); // connect path to webpack config
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  mode: 'development', // add development mode here like this
  devServer: {
    static: path.resolve(__dirname, './dist'), // specifies a folder from where to serve the application and its contents
    compress: true, // this will speed up file loading in development mode
    port: 3000, // will open your site at localhost:8080 (you can use another port)
    open: true // site will open automatically in the browser after executing npm run dev
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          "postcss-loader"  
        ]
      },
      {
        // add the rule for processing files
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource"
      },
    ] 
  },
  plugins: [
     new HtmlWebpackPlugin({
    template: "./src/index.html" // path to our index.html file
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin()], 

}

// module.exports is the syntax for export in Node.js