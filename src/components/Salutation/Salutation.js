import React, {Component} from 'react';
import './salutation.scss';

class Salutation extends Component {

    constructor(props){
        super(props);
        this.state = {
            wordsArray: props.words === undefined ? ['hello world'] : this.makeWordArray(props.words)

        };
    }

    makeWordArray(wordsString) {
        return wordsString.split(',').map(function(item) {
            return item.trim();
        });
    }
    getRandomGreeting() {
        return this.state.wordsArray[Math.floor(Math.random() * this.state.wordsArray.length)];
    }

    render() {
        return (
            <h1>{this.getRandomGreeting()}</h1>
        );
    }
}

export default Salutation;