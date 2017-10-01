import React, {Component} from 'react';

import Counter from './components/Counter';
import NameTag from './components/NameTag';
import Avatar from './components/Avatar/Avatar';
import Greeter from './components/Greeter';

class App extends Component {

    handleClick(){
        console.log('clicked');
        alert('hello');
    }

    render(){
        return (
            <div>
                <div style={{
                    display: 'flex'
                }}>
                    <Avatar user="benbakle" />
                    <Avatar user="andyglassley" />
                    <Avatar user="dfederspiel" />
                    <Avatar user="matthewtruty" />
                </div>
                <div>
                    <Counter />
                    <NameTag name="Rick James" />
                </div>
            </div>
        );
    }
}

export default App;