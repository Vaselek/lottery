import React, { Component } from 'react';

import './RandNumber.css';

class RandNumber extends Component {
    render() {
        return (
            <div className='rand-number'>
                <p>{this.props.value}</p>
            </div>
        )

    }
}

export default RandNumber