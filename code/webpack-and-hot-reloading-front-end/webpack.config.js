module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/main.js",
    output: { filename: "bundle.js" },    
    resolve: { extensions: [".ts", ".tsx", ".js", ".css"] },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ]
    },
    devServer: {
        contentBase: "./assets",
        port: 4500
    }
};
