import React, { Component } from 'react';
import '../styles/counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: -30 };
    }

    // https://facebook.github.io/react/docs/react-component.html#componentdidmount
    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    // https://facebook.github.io/react/docs/react-component.html#componentwillunmount
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <h2>Counter: {this.state.counter}</h2>
        );
    }
}

export default Counter;