// Used with expose-loader, which exposes the following modules
// for use in Razor references and also client side.

module.exports = {
    NameTag: require('./NameTag').default,
    Greeter: require('./Greeter').default,
    Counter: require('./Counter').default,
    Articles: require('./Articles/Article').default,
    Avatar: require('./Avatar/Avatar').default,
};