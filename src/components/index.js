// Used with expose-loader, which exposes the following modules
// for use in Razor references and also client side.

module.exports = {
    NameTag: require('./NameTag/NameTag').default,
    Greeter: require('./Greeter/Greeter').default,
    Counter: require('./Counter/Counter').default,
    Articles: require('./Articles/Article').default,
    Avatar: require('./Avatar/Avatar').default,
    Button: require('./Button/Button').default,
    Salutation: require('./Salutation/Salutation').default
    
};