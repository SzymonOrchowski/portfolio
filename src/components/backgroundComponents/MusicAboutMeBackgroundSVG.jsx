import React from 'react';
import useWindowDimensions from '../../utils/utils';

const MusicAboutMeBackgroundSVG = () => {
    const width = useWindowDimensions().width - 40
    const height = useWindowDimensions().height * 1.085
    
    const svgViewBox1 = `0 0 ${width} ${height}`
    
    const svgpath1 = `
    M ${width / 2},0
    L ${(width / 2) + 200},0
    L ${width / 2 + 30},${height + 126}
    L 0,${height}
    L ${(width / 2) - 250},${height - 200}
    Z
    `

    // console.log(width, ' x ', height, ' ',svgpath1)

    return (
            <div id='music-about-me-svg-background'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={svgViewBox1}>
                    <path fill="#212121" fill-opacity="1" d={svgpath1}></path>
                </svg>
            </div>
    );
};

export default MusicAboutMeBackgroundSVG;
