module.exports = {
    extraBabelPlugins: [
        "@babel/transform-runtime",
        ["import", {
            "libraryName": "antd",
            "libraryDirectory": "es",
            "style": true
        }]
    ],
}
