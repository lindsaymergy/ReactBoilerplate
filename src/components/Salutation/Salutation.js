import React, {Component} from 'react';
import './salutation.scss';

class Salutation extends Component {

    constructor(props){
        super(props);
        this.state = {
            wordsArray: props.words === undefined ? ['Salutations!'] : this.makeWordArray(props.words)
        };
    }

    makeWordArray(wordsString) {
        return wordsString.split(',').map(function(item) {
            return item.trim();
        });
    }

    getRandomWord(){
        return this.state.wordsArray[Math.floor(Math.random() * this.state.wordsArray.length)];
    }

    render() {
        return (
            <h1>{this.getRandomWord()}</h1>
        );
    }
}

export default Salutation;

