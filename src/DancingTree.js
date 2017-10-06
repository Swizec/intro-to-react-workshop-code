
import React, { Component } from 'react';

class DancingTree extends Component {
    render() {
        const { width, height } = this.props;

        return (
            <svg width={width} height={height}>
            </svg>
        );
    }
}

export default DancingTree;
