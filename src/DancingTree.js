
import React, { Component } from 'react';
import Pythagoras from './Pythagoras';
import { select as d3select, mouse as d3mouse } from 'd3-selection';
import { scaleLinear } from 'd3-scale';

Math.deg = function(radians) {
  return radians * 180 / Math.PI;
};


class DancingTree extends Component {
    state = {
        heightFactor: .5,
        lean: 0
    }

    componentDidMount() {
        d3select(this.refs.svg).on("mousemove", this.onMouseMove.bind(this));
    }

    onMouseMove() {
        const [x, y] = d3mouse(this.refs.svg),
              scaleLean = scaleLinear().domain([0, this.props.width/2, this.props.width])
                                       .range([.5, 0, -.5]);

        // manipulate local state to change heightFactor and lean
        this.setState({
            heightFactor: 1-y/this.props.height,
            lean: scaleLean(x)
        })
    }

    render() {
        const { width, height } = this.props;

        return (
            <svg width={width} height={height} ref="svg">
                <Pythagoras width={100} height={100}
                            x={width/2-25} y={height-100}
                            lvl={0}
                            maxlvl={10}
                            heightFactor={this.state.heightFactor}
                            lean={this.state.lean} />
            </svg>
        );
    }
}

export default DancingTree;
