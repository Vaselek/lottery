import React, {Component} from 'react';
import RandNumber from './components/RandNumber/RandNumber';
import NewNumbersBtn from './components/NewNumbersBtn/NewNumbersBtn';
import './App.css';


class App extends Component {

    state = {
        numbers: [],
    };



    generateNewNumbers = () => {
        let numbers = [];
        for (let i; numbers.length <= 4; i++) {
            const newNum = Math.floor(Math.random() * 31) + 5;
            if (!numbers.includes(newNum)) {
                numbers.push(newNum);
            }
        }
        numbers.sort((a, b) => a - b);
        this.setState({numbers});
    };

    render() {
        return (
            <div className="App">
                <NewNumbersBtn onClick={this.generateNewNumbers}/>
                <RandNumber value={this.state.numbers[0]}/>
                <RandNumber value={this.state.numbers[1]}/>
                <RandNumber value={this.state.numbers[2]}/>
                <RandNumber value={this.state.numbers[3]}/>
                <RandNumber value={this.state.numbers[4]}/>
            </div>
        );
    }
}

export default App;
