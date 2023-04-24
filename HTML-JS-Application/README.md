## HTML-JS-Application Sample
### SRC folder
```
assets
	|_BrightSignLogo-175x85.png
fonts
	|_font-placeholder.ttf
scripts
	|_scripts.js
styles
	|_style.css
index.html
```

Edit the html, css and js files to build your sample app.  Load media items into the assets folder. Install additional Node modules as needed.  


### Getting Started
1. Run ```npm install``` in the terminal to download dependencies.
2. Edit the HTML, CSS, and JS files in the /src folder to build your app.
3. Load media items into the /assets folder (Optional).
4. Install additional Node modules as needed.
5. When ready to publish, run below 2 commands from the terminal to package up the project into the /dist folder with the same subfolder structure:
```
npm run install-webpack
npm run build-webpack-bundle
```


### Publishing
After running Webpack, follow these steps to create your presentation:

You can publish the HTML/JS application by copying the contents of the /dist folder to your SD Card, adding the autorun.brs file found in the /opt folder as a standalone autorun, and booting up your player. 

Alternatively, you can create a presentation and publish with an HTML Widget in BrightAuthor/BrightAuthor:connected. 
1. In the Presentation dropdown menu, select New Presentation.
2. Select Single Zone > HTML as the presentation type.
3. Enter a presentation name and select the application folder icon under HTML Site > Local Content.
4. In the pop-up window, choose the index.html file under the /dist folder, or include your own HTML file.
5. In the main window, select Start.
6. Save and publish your presentation to your BrightSign player. You can use and import html-js-project.bpfx on your BrightAuthor:connected as a reference.
