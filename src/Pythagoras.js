
import React from 'react';

const memoizedCalc = function () {
    const memo = {};

    const key = ({ w, heightFactor, lean }) => [w,heightFactor, lean].join('-');

    return (args) => {
        const memoKey = key(args);

        if (memo[memoKey]) {
            return memo[memoKey];
        }else{
            const { w, heightFactor, lean } = args;

            const trigH = heightFactor*w;

            const result = {
                nextRight: Math.sqrt(trigH**2 + (w * (.5+lean))**2),
                nextLeft: Math.sqrt(trigH**2 + (w * (.5-lean))**2),
                A: Math.deg(Math.atan(trigH / ((.5-lean) * w))),
                B: Math.deg(Math.atan(trigH / ((.5+lean) * w)))
            };

            memo[memoKey] = result;
            return result;
        }
    }
}();

const Pythagoras = ({ width, height, lvl, maxlvl, x, y, heightFactor,lean, left, right }) => {
    if (lvl >= maxlvl) {
        return null;
    }

    const { nextRight, nextLeft, A, B } = memoizedCalc({
        w: width,
        heightFactor: heightFactor,
        lean: lean
    });

    let rotate = '';

    if (left) {
        rotate = `rotate(${-A} 0 ${width})`;
    }else if (right) {
        rotate = `rotate(${B} ${width} ${width})`;
    }

    return (
        <g transform={`translate(${x} ${y}) ${rotate}`}>
            <rect width={width} height={width} x={0} y={0} />

            <Pythagoras width={nextLeft}
                        height={height}
                        x={0} y={-nextLeft}
                        lvl={lvl+1} maxlvl={maxlvl}
                        heightFactor={heightFactor}
                        lean={lean}
                        left />
            <Pythagoras width={nextRight}
                        height={height}
                        x={width-nextRight} y={-nextRight}
                        lvl={lvl+1} maxlvl={maxlvl}
                         heightFactor={heightFactor}
                        lean={lean}
                        right />
        </g>
    )
};

export default Pythagoras;
