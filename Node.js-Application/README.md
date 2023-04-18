## NodeJS-Application Sample
### SRC folder
```
index.js
```

Edit the index.js to build your sample app.


### Getting Started
1. Run ```npm install``` in the terminal to download dependencies.
2. Edit the JS files in the /src folder to build your app.
3. Install additional Node modules as needed.
4. When ready to publish, run below 2 commands from the terminal to package up the project into the /dist folder:
```
npm run install-webpack
npm run build-webpack-bundle
```
5. This will package up the project into the /dist folder with a bundle.js file.


### Publishing
After running Webpack, follow these steps to create your BrightAuthor:connected presentation:

1. In the Presentation dropdown menu, select New Presentation.
2. Select Single Zone > Node.js as the presentation type.
3. Enter a presentation name and select the application folder icon under Node.js.
4. In the pop-up window, choose the bundle.js file under the /dist folder, or include your own bundle js.
5. In the main window, select Start.
6. Save and publish your presentation to your BrightSign player. You can use and import nodejs-project.bpfx on your BrightAuthor:connected as a reference.
