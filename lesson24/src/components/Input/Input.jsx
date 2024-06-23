import React from 'react';
import './Input.css';

export class Input extends React.Component {
    render() {
        return (
            <div className="input-group mb-3">
                <span className="input-group-text border-0">https://swapi.dev/api/</span>
                <input type="text" className="form-control" placeholder="people/1/"/>
                <button className="btn btn-outline-secondary">Get info</button>
            </div>
        );
    }
}