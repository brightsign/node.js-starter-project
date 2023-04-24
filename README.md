# BrightSign Samples
This repository contains pre-made starter projects for creating HTML/JS and Node.js applications that can run on a BrightSign player. These projects are designed for a browser/on-screen presentation.


## Install 
* Download [Nodejs](https://nodejs.org/en/download), if you don’t have it already, to install Node.js and npm. 
* Your computer and BrightSign player must be connected to the internet. 
* BrightAuthor / BrightAuthor:connected should already be downloaded and installed on your computer. 


## Starting Samples
### Example1 HTML-JS-Application
This is a pre-made starter HTML/JS project that is already configured with webpack to create a folder with everything that needs to be copied to a BrightSign SD Card, or added to an HTML Widget in BrightAuthor/BrightAuthor:connected. If your application contains full-stack solution with HTML, CSS and JavaScript, this is the recommended starting project, and please navigate to the /HTML-JS-Application folder for more instructions.


### Example2 NodeJS-Application
This is a pre-made starter Node.js project that shows how to instantiate a Node Express server that runs on a BrightSign player. This sample creates a web server that can serve static files from port 9090. If your application only contains a back-end JavaScript server solution, this is the recommended starting example, please navigate to folder /Node.js-Application for more instructions.


## Appendix
* See the BrightSign [Node.js documentation](http://docs.brightsign.biz/display/DOC/Node.js) for more information.
* The node_modules directory contains a lot of unnecessary files in addition to the code your application needs, and its size can be a problem when you deploy your application to an SD card or publish it through BrightAuthor / BrightAuthor:connected. [Webpack](https://webpack.js.org), which bundles JavaScript modules to use in browsers, solves this problem.
* If you would like to use [BrightSign Javascript objects](http://docs.brightsign.biz/display/DOC/JavaScript+API) with webpack, please see the "externals" section of /HTML-JS-Application/webpack.config.js.


## License

This project is licensed under the BrightSign License - see the LICENSE file for details