import React from 'react';
import ReactDOM from 'react-dom';

import Greeter from './components/Greeter';
import NameTag from './components/NameTag';
import Avatar from './components/Avatar';

ReactDOM.render(<Greeter />, document.getElementById('greeter'));
ReactDOM.render(<NameTag name="Alejandra" />, document.getElementById('tag'));
ReactDOM.render(<Avatar />, document.getElementById('avatar'));

ReactDOM.render(<Greeter />, document.getElementById('greeter1'));
ReactDOM.render(<NameTag name="David" />, document.getElementById('tag1'));
ReactDOM.render(<Avatar />, document.getElementById('avatar1'));

// Expose collection to UI
var Components = require('expose-loader?Components!./components');