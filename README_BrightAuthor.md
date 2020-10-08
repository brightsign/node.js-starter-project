# BrightSign Node.js Sample
This sample BrightAuthor application shows how to instantiate a node.js server that runs on a BrightSign player. It creates a web server that can serve static files from the root folder on port 9090.  

This example was created for BrightAuthor. 

 
## Prerequisites 

* Download [Nodejs](https://nodejs.org/en/download), if you don’t have it already, to install Node.js and npm. 
* Your computer and BrightSign player must be connected to the internet. 
* BrightAuthor should already be downloaded and installed on your computer. 


## Deploying a Node.js server Application with BrightAuthor 

### Create your Node.js Application  
1. Clone the project or download [ZIP](http://www.github.com/brightsign/node.js-starter-project/archive/master.zip), and then unzip *node.js-starter-project-master.zip*. 
2. If you have not run npm previously, run **npm init** in your terminal to initialize the install. If you wish, you can import other modules using **npm install** for additional functionality. 
3. Create an html file or use the **node-server.html** file that is provided in the *node.js-starter-project-master* folder, as the application entry point.  
4. Import the node modules you will need in your application to function and write your JavaScript code (in this example, the node modules are all included in **express** and the JavaScript is in **index.js**). From the *Downloads* folder, run:
``` 
npm install --save express  
```
5. Run these Webpack commands to package your application (see Appendix A: About Webpack for more details):   
``` 
npm install --save-dev webpack webpack-cli copy-webpack-plugin zip-webpack-plugin  

npx webpack --mode production 
```
### Create your Application in BrightAuthor 
1. Create a plugin, or use **node-server.brs** from the example, to launch your Node.js application. 
2. In the BrightAuthor **Presentation Properties** under **Autorun**, add the script plugin to enable Node.js in your presentation.  
![](https://github.com/stmulq/node.js-starter-project/blob/Documentation_updates/PresentProperties1.png)
3. Under **Files**, add the **dist/node-server.zip** file from your source directory. 

### Display Files from your Webserver  
If you have used the unmodified example, enter the *http://<ip_address_of_ brightsign>:9090/filename* in a browser (replace filename and the ip address with your specific information). It should then display the readme.md file.   

## Appendix
### Appendix A: About Webpack 
The  node_modules directory contains a lot of unnecessary files in addition to the code your application needs, and its size can be a problem when you deploy your application to an SD card or publish it to the cloud. [Webpack](https://webpack.js.org), which bundles JavaScript modules to use in browsers, can solve this problem. 

If you have a node.js application that has an index.html that calls an entry point function called main():  
``` 
<body onload='main()'>  
```
If this function is inline in the html, you will want to move it to a new file, index.js. This file would contain the references to your other JavaScript files, and to the node modules:  
``` 
var myutils = require('./utilities'); // My utilities.js  
var moment = require('moment'); // A node module     

function main() {    

  myutils.foo();  
  moment.now();  
  ...  

}  
```
Your index.html would then need to reference index.js:  
``` 
<script src='./index.js'></script> 
```
To use webpack, attach main() to the window object so that it can be found from index.html (the actual definition gets uglified):  
``` 
var myutils = require('./utilities'); // My utilities.js  
var moment = require('moment'); // A node module    

function main() {  

  myutils.foo();  
  moment.now();  
  ...  

}  

window.main = main;  
```
Change index.html to point to the bundled JavaScript, and to window.main():  
``` 
<script src='./bundle.js'></script>  

<body onload="window.main()">  
```
### Appendix B: Notes 
* An example is included to help you use [BrightSign Javascript objects](http://docs.brightsign.biz/display/DOC/JavaScript+API). See the "externals" section of the webpack.config.js.
* See the BrightSign [Node.js documentation](http://docs.brightsign.biz/display/DOC/Node.js) for more information.


