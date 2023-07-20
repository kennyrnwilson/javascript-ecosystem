module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/client/Main.js",
    output: { filename: "bundle.js" },    
    resolve: { extensions: [".js"] },
    module: {
        rules: []
    }
};
