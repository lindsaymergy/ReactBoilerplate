import React, {Component} from 'react';

import Button from './components/Button';
import Counter from './components/Counter';
import NameTag from './components/NameTag';
import Avatar from './components/Avatar';

class App extends Component {

    handleClick(){
        console.log('clicked');
        alert('hello');
    }

    render(){
        return (
            <div>
                <Avatar user="harveydogg" />
                <Button text="two" click={this.handleClick} />
                <Counter />
                <NameTag name="Favio" />
                <Button click={this.handleClick} text="THIS IS SO COOL!" />
            </div>
        )
    }
}

export default App;