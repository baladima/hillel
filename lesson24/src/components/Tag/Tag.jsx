import React from 'react';
import './Tag.css';

export class Tag extends React.Component {
    render() {
        const { name } = this.props;

        return (
            <div className="tag">{ name }</div>
        );
    }
}