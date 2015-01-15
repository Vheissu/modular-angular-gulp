
## Gulp + Browserify + Angular = :)

If you're not already using Gulp, feel intimidated by it or not sure the best way to structure your applications this is the repository for you.

The perfect skeleton for building modular AngularJS applications using Browserify and Gulp. This means you can include your files like you would any Node.js module, export them into a bundle and use them on the client-side.

I used to have a "src/modules" directory for my Angular applications and then glob for a manifest file and subsequent files, then concatenate them into a bundled file. While this works, the Browserify approach is arguably a whole lot cleaner and easier.

This Gulpfile.js assumes you are working with Stylus for your preprocessor of choice, but you can easily add in SASS or something else. It also assumes you are working inside of a folder called src and your final application is inside of a directory called "app" - the paths can all be changed inside of the Gulpfile.js if the defaults don't apply to you.

### Questions?
Feel free to email me at dwayne@ilikekillnerds.com with any questions.
