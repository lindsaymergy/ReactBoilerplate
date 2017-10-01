
class Example {
    constructor(greeter){
        this.greeter = greeter;
    }

    doStuff(){
        const next = this.greeter.state.currentNumber += 10;
        this.greeter.setState({ currentNumber: next });
    }
}

export default Example;