
import React, { Component } from 'react';
import Pythagoras from './Pythagoras';

Math.deg = function(radians) {
  return radians * 180 / Math.PI;
};

class DancingTree extends Component {
    render() {
        const { width, height } = this.props;

        return (
            <svg width={width} height={height}>
                <Pythagoras width={100} height={100}
                            x={width/2-25} y={height-100}
                            lvl={0}
                            maxlvl={10}
                            lean={0} />
            </svg>
        );
    }
}

export default DancingTree;
