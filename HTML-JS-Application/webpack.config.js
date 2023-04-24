const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets/",
          to: "../assets/",
        },
        {
          from: "src/fonts/",
          to: "../fonts/",
        },
        {
          from: "src/styles/",
          to: "../styles/",
        },
        {
          from: "src/*.html",
          to: "../[name][ext]",
        },
      ],
    }),
  ],
  entry: "./src/scripts/scripts.js",
  output: {
    publicPath: "./",
    filename: "scripts.js",
    path: path.resolve(__dirname, "dist/scripts"),
  },

  target: "node",

  resolve: {
    extensions: [".js"],
  },
  externals: {
    "@brightsign/screenshot": "commonjs @brightsign/screenshot",
    "@brightsign/registry": "commonjs @brightsign/registry",
    "@brightsign/videomodeconfiguration": "commonjs @brightsign/videomodeconfiguration",
    "@brightsign/systemtime": "commonjs @brightsign/systemtime",
    "@brightsign/system": "commonjs @brightsign/system",
    "@brightsign/devicestatus": "commonjs @brightsign/devicestatus",
    "@brightsign/dwsconfiguration": "commonjs @brightsign/dwsconfiguration",
    "@brightsign/networkdiagnostics": "commonjs @brightsign/networkdiagnostics",
    "@brightsign/videooutput": "commonjs @brightsign/videooutput",
    "@brightsign/networkconfiguration": "commonjs @brightsign/networkconfiguration",
    "@brightsign/configurednetworks": "commonjs @brightsign/configurednetworks",
    "@brightsign/keystore": "commonjs @brightsign/keystore",
    "@brightsign/splash": "commonjs @brightsign/splash",
    "@brightsign/devicecustomization": "commonjs @brightsign/devicecustomization",
    "@brightsign/assetpool": "commonjs @brightsign/assetpool",
    "@brightsign/assetpoolfetcher": "commonjs @brightsign/assetpoolfetcher",
    "@brightsign/assetrealizer": "commonjs @brightsign/assetrealizer",
    "@brightsign/brightscript/autorunInvoker":
      "commonjs @brightsign/brightscript/autorunInvoker",
    "@brightsign/hostconfiguration": "commonjs @brightsign/hostconfiguration",
    "@brightsign/bsnfetch": "commonjs @brightsign/bsnfetch",
    "@brightsign/filesysteminfo": "commonjs @brightsign/filesysteminfo",
    "@brightsign/networkhotplug": "commonjs @brightsign/networkhotplug",
    "@brightsign/watchdogClient": "commonjs @brightsign/watchdogClient",
    "@brightsign/bt": "commonjs @brightsign/bt",
    "@brightsign/legacy/deviceinfo": "commonjs @brightsign/legacy/deviceinfo",
    "@brightsign/legacy/controlport": "commonjs @brightsign/legacy/controlport",
    "@brightsign/applicationport": "commonjs @brightsign/applicationport",
    "@brightsign/messageport": "commonjs @brightsign/messageport",
    "@brightsign/storageinfo": "commonjs @brightsign/storageinfo",
    "@brightsign/htmlwidget": "commonjs @brightsign/htmlwidget",
    "@brightsign/serialport": "commonjs @brightsign/serialport",
    "@brightsign/usbhotplug": "commonjs @brightsign/usbhotplug",
  },
  module: {
    rules: [{}],
  },
};
