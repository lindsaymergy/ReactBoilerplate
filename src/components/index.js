// Used with expose-loader, which exposes the following modules
// for use in Razor references and also client side.

module.exports = {
    NameTag: require('./NameTag').default,
    Greeter: require('./Greeter').default,
    Avatar: require('./Avatar').default,
    Counter: require('./Counter').default,
    Home: require('./Home').default,
    Articles: require('./Articles/Article').default
};