import React, {Component} from 'react';
import './progressBar.scss';

class ProgressBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            maxValue: props.maxValue,
            value: props.value,
            //currentPercentage: 0,
            //newPercentage: 0,
            color: props.color
        };
        //this.stepper = .05;
        this.targetPercentage = (this.props.value / this.props.maxValue);
        //setTimeout(this.tick.bind(this), 10);
    }

    // tick() {
    //     this.stepper += .05;
    //     this.setState({ newPercentage: this.state.currentPercentage + this.stepper });

    //     this.setState({
    //         currentPercentage: this.state.newPercentage >= 1 ? 1 : this.state.newPercentage
    //     });

    //     if(this.state.newPercentage < this.targetPercentage)
    //         setTimeout(this.tick.bind(this), 10);
    // }

    getRadius() {
        return '15px ' + ((this.targetPercentage * 100 >= 100) ? '15px 15px' : '0 0') + ' 15px';
    }

    render() {
        return (
            <div className="progress-bar-wrapper">
                <label>Progress &reg; Bar</label>
                <div className="progress-bar">
                    <div className="progress-bar-progress" style={{ transition: 'width 15s' , backgroundColor: this.props.color, maxWidth: this.targetPercentage * 100 + '%', borderRadius: this.getRadius() }}>
                        <div className="percentage">{Math.round(this.targetPercentage * 100)}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgressBar;