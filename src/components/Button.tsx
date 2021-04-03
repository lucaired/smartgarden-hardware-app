import React from 'react';
import fan from '../fan.svg';
import './Button.css'
import axios from "axios";

export default class Button extends React.Component {
    state = {
        fanState: 'off',
        fanNumber: 2,
    }

    toggleFan() {
        axios.get(`http://localhost:8000/fan/2/on`)
            .then(res => {
                console.log("hello");
            });
    }

    render() {
        return (
            <div className="fan__wrapper">
                <img
                    src={fan}
                    onClick={this.toggleFan}
                    className="Fan"
                    alt="fan"
                />
                <div className="fan__schedule">
                    <h2>Schedule </h2>
                    <p>every 30 min</p>
                </div>
            </div>
        );
    }
}

