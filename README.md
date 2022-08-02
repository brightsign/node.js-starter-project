# BrightSign Node.js Sample

This sample BrightAuthor:connected application shows how to instantiate a node.js server that runs on a BrightSign player. It creates a web server that can serve static files from port 9090. 

This example was created for BrightAuthor:connected.

## Prerequisites
* If you don’t have it already, download Nodejs to install Node.js and npm. 
* Your computer and BrightSign player must be connected to the internet. 
* BrightAuthor:connected should already be downloaded and installed on your computer. 

## Deploying a Node.js Aerver Application with BrightAuthor:connected	
### Create your Node.js Application
1. Clone the project or download [ZIP](http://www.github.com/brightsign/node.js-starter-project/archive/master.zip), and then unzip *node.js-starter-project-master.zip*. 
2. If you have not run npm previously, run **npm init** in your terminal to initialize the install. If you wish, you can import other modules with **npm  install** for additional functionality. 
3. Import the node modules you will need your application to function and write your JavaScript code (in this example, the node modules are all included in express and the JavaScript is in index.js). From the *Downloads* folder, run: 
``` 
npm install --save express  
```
4. Run these Webpack commands to package your node application as a single JavaScript file (see Appendix B: Notes for more details):   
``` 
npm install --save-dev webpack webpack-cli copy-webpack-plugin zip-webpack-plugin
npx webpack --mode production
```

### Create your Application
After running Webpack, follow the steps below to create your application. This example assumes that you have the latest version of BrightAuthor:connected: 
1. In the **Presentation** dropdown menu, select **New Presentation**. 
2. Select **Single Zone > Node.js** as the presentation type. 
3. Enter a presentation name and select the application folder icon under **Node.js**. 
4. In the pop-up window, choose the bundle.js example under the dist folder or include your own JavaScript application. Then choose **Select**: 
![](https://github.com/stmulq/node.js-starter-project/blob/Documentation_updates/CreateApplication_BAcon.png)
5. In the main window, select **Start**.  
6. Save and publish your presentation.  

If you have a more complex node application, or don't have the latest version of BrightAuthor:connected, you may need to use an alternate method to create your application. See Appendix A for this method. 

### Display Files from your Webserver  
If you have used the unmodified example, you can access the files in your root directory or in your directory folder using the link in a browser. For example: 

http://<ip_address_of_ BrightSign>:9090/filename
 
## Appendix
### Appendix A: An Alternate Method 
If you have a more complex node application, or don't have the latest version of BrightAuthor:connected, you can use these steps to create your application: 

1. Create an html file or use the **node-server.html** file that is provided in the *node.js-starter-project-master* folder, as the application entry point. 
2. In the **Presentation** dropdown menu, select **New Presentation** and enter a presentation name. 
3. Expand **Presentation Settings** and select **Support Content**.  
4. Under **Script Plugin**, add your plugin or use **node-server.brs** from the example, to enable Node.js in your presentation. 
5. Use the “File Select” icon to add your application zip as an additional file (for example, **dist/node-server.zip**). 

### Appendix B: Notes
* The  node_modules directory contains a lot of unnecessary files in addition to the code your application needs, and its size can be a problem when you deploy your application to an SD card or publish it to the cloud. [Webpack](https://webpack.js.org), which bundles JavaScript modules to use in browsers, solves this problem. 
* An example is included to help you use [BrightSign Javascript objects](http://docs.brightsign.biz/display/DOC/JavaScript+API). See the "externals" section of the webpack.config.js.
* See the BrightSign [Node.js documentation](http://docs.brightsign.biz/display/DOC/Node.js) for more information.

