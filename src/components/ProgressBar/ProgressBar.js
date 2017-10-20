import React, {Component} from 'react';
import './progressBar.scss';

class ProgressBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            maxValue: props.maxValue,
            value: props.value,
            color: props.color
        };
        this.targetPercentage = (this.props.value / this.props.maxValue);
    }

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