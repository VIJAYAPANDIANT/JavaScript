// ==========================================
// TOPIC: Modern JS Tooling (npm, Vite, Webpack, & Babel)
// ==========================================

/*
Definition:
Modern JavaScript applications require structured tooling environments to manage packages, 
compile modern syntax to older browser compatible versions, bundle files, and run hot-reload development servers.

Key Tooling Concepts:
1. npm (Node Package Manager)
2. Babel (JavaScript Compiler for backward compatibility)
3. Webpack (Module Bundler)
4. Vite (Modern, lightning-fast build tool)

================================================================================
SYNTAX REFERENCE
================================================================================
// npm commands
npm init -y
npm install packageName
npm install --save-dev packageName
npm uninstall packageName
npm run scriptName

// Vite Configuration (vite.config.js)
import { defineConfig } from "vite";
export default defineConfig({
  // configs
});
*/


// ==========================================
// 1. npm (Node Package Manager)
// ==========================================
/*
npm installs package dependencies locally or globally, tracking them in a `package.json` manifest.

Common Terminal Commands:
$ npm init -y                 # Initializes a new project and creates package.json
$ npm install lodash          # Installs lodash as a production dependency (adds to package.json)
$ npm install -D jest         # Installs jest as a devDependency (-D / --save-dev)
$ npm uninstall lodash        # Removes a package dependency
$ npm run build               # Runs the script mapped to "build" in package.json
*/


// ==========================================
// 2. Babel
// ==========================================
/*
Babel compiles modern ECMAScript code (ES6+) into backward-compatible JavaScript (ES5) 
so that it can run on older browsers.

A. Installation:
$ npm install -D @babel/core @babel/cli @babel/preset-env

B. Configuration File: babel.config.json
{
  "presets": ["@babel/preset-env"]
}
*/


// ==========================================
// 3. Webpack
// ==========================================
/*
Webpack is a module bundler. It takes all modules (JS, CSS, Images) in your project, 
resolves relationships between files, and bundles them into one or more static distribution files.

A. Installation:
$ npm install -D webpack webpack-cli

B. Configuration File: webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Main entry point
  output: {
    filename: "bundle.js", // Output file
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" // Run JS through Babel compiler
        }
      }
    ]
  }
};
*/


// ==========================================
// 4. Vite
// ==========================================
/*
Vite is a modern build tool that is significantly faster than Webpack. 
It leverages native ES Modules (ESM) in the browser during development (no bundling required 
until production) and uses Rollup under the hood for production builds.

A. Starting a new project with Vite:
$ npm create vite@latest my-app --template vanilla
$ cd my-app
$ npm install
$ npm run dev                  # Starts instant development server

B. Configuration File: vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000 // Custom development server port
  }
});
*/
