import React from 'react';
import ReactDOM from 'react-dom';

import Greeter from './components/Greeter';
import NameTag from './components/NameTag';
import Avatar from './components/Avatar';

ReactDOM.render(<Greeter />, document.getElementById('greeter'));
ReactDOM.render(<NameTag name="David" />, document.getElementById('tag'));
ReactDOM.render(<Avatar />, document.getElementById('avatar'));