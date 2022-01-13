import React from 'react';
import { useWindowDimensions } from '../../utils/utils';

const WelcomePageBacgroundSVG = () => {
    let width = useWindowDimensions().width
    const height = useWindowDimensions().height * 1.1
    
    const svgViewBox1 = `0 0 ${width} ${height}`
    console.log(svgViewBox1)
    
    const svgpath1 = `
    M 0,${height}
    C ${width * 0.5} ${height * 1.0}, ${width * 0.7} ${height * 0.75}, ${width * 0.8} ${height * 0.0}
    L ${width * 1.0} ${height * 0.0}
    L ${width},${height}
    L 0,${height}
    Z
    `

    return (
            <div id='welcome-page-svg-background'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={svgViewBox1}>
                    <path fill="#AA0000" fillOpacity="1" d={svgpath1}></path>
                </svg>
            </div>
    );
};

export default WelcomePageBacgroundSVG;

// C x1 y1, x2 y2, x y