import React, { Component } from 'react';
import '../styles/counter.scss';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
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
            <h2>{this.state.counter} seconds since the last refresh</h2>
        );
    }
}

export default Counter;