// right now we have no optimizations in webpack for production
// if we run the webpack build, it shows we are using an insane amount of data, most of it being source maps in the bundle
// we want to get as much stuff out of bundle and into other files that can optionally load
// how can we just run webpack in production mode?
// webpack.js.org, guides, production
// -p is the flag that lets us minimize our JS code, and tells other code to prepare itself for production
// react loads other stuff for development purposes, creating a lot of unnecessary files that slow things down
// we are going to create a nodeenv variable that we can set to production to signal to third party libraries to load the most bare bones possible
// we start by creating a build:prod script in package.json
// "build:prod": webpack -p
// running this already shaves off a bit of MB
// then we change the contents of webpack.config to determine if we are in production or development mode
// in webpack.config, we change our layout to export a function as opposed to an object
// the function is called module.exports, and it is an arrow function that, when called, returns the webpack.config object
// the function gets called with arguments that can determine which devtool value to add
// one argument is env- for environment
// we need to change our build:prod command to add --env production to set the argument
// now we need to check if env is the string 'production'
// in webpack.config, make a variable called isProduction and check if env === 'production'
// if it is true, we run webpack for production, and if it is false then we run it for development
// the source maps take up most of the size
// we still want them in production, but we are going to opt for a slower version- which is fine since we dont build for production as much as development
// the new production source map tool we're gonna use will create an external file that is huge but only loads if someone cracks open the devtools
// this will make it so that most regular users on our site/app dont get bogged down by the weight of all those source maps
// in the devtool value, check if isProduction is true
// if not in production mode, we still wanna use eval-cheap-module-source-map, since its a great source map for development
// if in production mode, we will only use source-map
// to check the benefits of different source maps, go to webpack.js.org, devtools, and check the devtool map
// this map will show how beneficial it is for production, and if it gives us access to our original source
// if we run build:prod in the terminal, we will see that two files are being outpout by webpack
// bundle.js is being ran, which contains the core application JS which is much smaller now
// bundle.js.map is new, and is much bigger, but is only being loaded when someone cracks open the developers tools

// CSS
// we want to make it so that our css is not loaded after our html and javascript, because that could take a while
// to do this, we can install a webpack plugin that helps ease the load on our bundle, which is where all of our css is currently being handled
// first we need to import the plugin at the top of webpack.config so that we can create instances of it in webpack
// then we create an instance of it for the styles we are extracting, passing in as an argument the name of the file we want our css in- styles.css should work well
// in our 'use' rule under 'modules', we call CSSExtract to create an instance, then use the extract() method
// we can pass in our plugins we want to run inside extract()
// then we delete bundle.js. bundle.map.js, styles.css, and styles.css.map
// then we just need to add a link to index.html that connects our css
// to set up source maps for our css, so we can pinpoint where things come from in our editor code, we need to make an adjustment
// first, we change our devtool configuration to run in 'inline-source-map' if not in production mode
// then, we add the below code into our 'use' rule inside CSSExtract.extract()
// {
//     use: [
//         {
//             loader: 'css-loader',
//             options: {
//                 sourceMap: true
//             }
//         },
//         {
//             loader: 'sass-loader',
//             options: {
//                 sourceMap: true
//             }
//         }
//     ]
// }