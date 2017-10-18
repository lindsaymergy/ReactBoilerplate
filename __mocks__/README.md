## File Mocks (for Jest)

When using Webpack and Jest together, they present some interesting problems for us when authoring components.  Webpack loves to see imports in our component classes so that it can correctly bundle all dependencies in the chain.  However, Jest, being a command line JS runner, hates to see imports that JS don't understand.  So we have to ensure that Jest can test when authoring, but Webpack can bundle when releasing. 

All files in \_\___mocks__\_\_ are used for mocking file types.  Since webpack allows us to reference scss and other file types directly in our component classes, it's important that Jest knows how to handle them when testing.

Basically, these files provide no value to your tests and will break the command line runner that Jest uses to execute tests; because why would a JS compiler know what to do with a JPG?

As such, what we need to do is create a simple bit of code that will return a custom type, something the compiler can understand (e.g. object { } or 'string' ), whenever it finds an import for something other than JS in our components.

To reference these mocks, the Jest config section in *package.json* includes the following moduleNameMapper option; an object of key/value pairs where key = RegEx match and value = the mock we want to use instead.
~~~
"moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>=/__mocks__/fileMock.js",
    "\\.(scss|less)$": "<rootDir>/__mocks__/styleMock.js"
}
~~~
Mocking files keeps Jest happy and your dev experience lightweight, allowing us to rapidly test with mocked dependencies, yet maintain our dependecy chains in our components for swift production bundling.