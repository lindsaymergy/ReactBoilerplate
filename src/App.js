import React, {Component} from 'react';

import Button from './components/Button';

class App extends Component {

    handleClick(){
        console.log('clicked');
    }

    render(){
        return (
            <Button text="test" click={this.handleClick} />
        )
    }
}

export default App;