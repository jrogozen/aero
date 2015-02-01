== README ==

Hi!

I've implemented the frontend of tinychat in Angular and included the backend specs in backend_design_spec.txt. 

You can find the repo on github here 
    https://github.com/jrogozen/aero

Before starting the server, please make sure you have Npm and Bower installed. In order to run the tests, you may have to also globally install Protractor and update webdriver-manager using
    webdriver-manager update

After checking out the Repo, please run 
   npm install && bower install

You can start the server, inject all JS/Sass files, and lint using
   gulp

I've included some barebones end to end tests and once the server is started, you can run them by typing
    protractor protractor.conf.js

Within the project, I've implemented displaying chat messages w/ Author names, adding and editing messages, timestamps, link recognition, bootstrap styling, a user list, and filtering of messages by user.

The two main routes of the app are:
   / && /#/users

Once connected to a back end, I would enable Angular's HTML5mode to get rid of the hashbang when possible. 

Angular Modules:
 - ui.router (routes/states)
 - ngSanitize (necessary for directive to linkify links)

Possible Future enhancements:
 - User login/authentication
 - User settings (gravatar, stats, etc..)
 - User permissions (only edit your own messages)
 - More robust test suite && controller tests (mocha)

=== What files live where ===

frontend_design_spec.txt has a copy of the information/requirements for this exercise.

backend_design_spec.txt should contain the spec for what you want the backend developer to build so that your frontend demo app would actually work someday. Once you have your app more or less working, you'll need to write this.

index.html is your main HTML page. 

If you use any templates or partials in your app, you can store them in /partials.

Your JS code goes in /js. There's an app.js file in there already to get you started. Any libraries you use as dependencies can go in /libs (if not linked via a CDN). Your index.html file already includes Twitter Bootstrap and JQuery, to start.

Your stylesheets go in /styles. There's a style.css file in there already to get you started. If you'd like to use a CSS preprocessor like SCSS or LESS, great! Make sure to include the original SCSS/LESS file(s), not just compiled CSS, when you send your code back so we can see them.

/fixtures contains a fake data file, fakedata.json, to help you get started. (Pretend this came from a server somewhere!)

If you'd rather organize your code differently, go for it. Just update this README file accordingly.

=== Viewing the app for development ===

If your computer has Python installed, an easy way to get this frontend-only app up and running is to cd into this directory in your terminal window, then run:

$ python -m SimpleHTTPServer 8080

This will start a basic web server serving the contents of this directory on your machine. You can then see index.html at localhost:8080. (Feel free to change the port number if you've got something else running on 8080.)

If you'd rather serve your app for development in a different way, go for it.