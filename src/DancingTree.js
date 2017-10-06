
import React, { Component } from 'react';

const Pythagoras = ({ width, height, x, y }) => (
    <rect width={width} height={height} x={x} y={y} />
);

class DancingTree extends Component {
    render() {
        const { width, height } = this.props;

        return (
            <svg width={width} height={height}>
                <Pythagoras width={100} height={100}
                            x={width/2-25} y={height-100} />
            </svg>
        );
    }
}

export default DancingTree;
