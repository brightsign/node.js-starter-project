# BrightSign Node.js Sample

This sample BrightAuthor application shows how to instantiate a node.js server that runs on a BrightSign player.

## About the sample application
This application creates a web server that can be used to serve static files from a folder called "www", on port 9090. There is one file included in this directory, readme.md. If you run the application on a BrightSign player that is connected to a network, type this into a browser to test it: http://<ip address of brightsign>:9090/www/readme.md.

## Deploying a Node.js server application with BrightAuthor 	
### Create your Node.js application
* Run npm init to create the skeleton
* Run npm install to import modules
* Create an html file as the entry point
* Import your node modules and write your javascript code
* Run webpack to package your application (see below)
* Package your Node.js application as a zip

### Create your BrightAuthor application
* Create a plugin to launch your Node.js application
* Add the plugin to BrightAuthor
* Include your application zip as an additional file 
* Add code to your plugin to unzip the application

### Additional steps for the application
This application uses static files in the www folder. 

* Add your files to this folder, and zip them up. 
* The zip must have all the files at the root when unzipped (no folder hierarchy), and must be called www.zip. 
* The webpack process will copy the zip to the dist folder.

#### Webpack
The size of the node_modules directory can be a problem when deploying your application to an SD card or publishing to the cloud. This directory contains all the code your application depends on, but it also contains a lot of extra files that are unnecessary.  Fortunately, there is a pretty easy solution: webpack.
 
Say you have a node.js application that has an index.html that calls an entry point function called main():

``` 
<body onload='main()'>
```
If this function is inline in the html, you will want to move it to a new file, index.js. This file would contain the references to your other javascript files, and to the node modules:
 
```
var myutils = require('./utilities'); // My utilities.js
var moment = require('moment'); // A node module
 
function main() {
 
  myutils.foo();
  moment.now();
  ...
}

```
Your index.html would then need to reference index.js:

``` 
<script src='./index.js'></script>
```
 
To use webpack, attach main() to the window object so that it can be found from index.html (the actual definition gets uglified):

``` 
var myutils = require('./utilities'); // My utilities.js
var moment = require('moment'); // A node module
 
function main() {
 
  myutils.foo();
  moment.now();
  ...
}
window.main = main;
```
 
Change index.html to point to the bundled javascript, and to window.main():

``` 
<script src='./bundle.js'></script>
 
<body onload="window.main()">
```
 
To build your bundle:

```
npm install --save express
npm install --save-dev webpack webpack-cli copy-webpack-plugin zip-webpack-plugin
npx webpack --mode production
```
 
Then add dist/node-server.zip and www.zip to Presentation Properties > Files in BrightAuthor.
 
A sample webpack config is included.  

#### Notes
* To use [BrightSign Javascript objects](http://docs.brightsign.biz/display/DOC/JavaScript+API): An example is included. See the "externals" section of the config.
* See the [Node.js documentation](http://docs.brightsign.biz/display/DOC/Node.js) for more information.