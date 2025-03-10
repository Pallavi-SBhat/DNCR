const path = require("path");

module.exports = {
  entry: "./qrcode.js", // Path to your entry file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  resolve: {
    extensions: [".js"], // Add other extensions if needed
  },
};