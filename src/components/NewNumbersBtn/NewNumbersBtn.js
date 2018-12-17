import React, { Component } from 'react';

class NewNumbersBtn extends Component {
    render() {
        return(
            <div>
                <button onClick={this.props.onClick}>New Numbers</button>
            </div>
        )
    }
}

export default NewNumbersBtn;