import React from 'react';
import { useWindowDimensions } from '../../utils/utils';
import SkillsSphere from './SkillsSphere';

const Skills = () => {
    return (
        <div id='web-dev-skills-container'>
            <header>
                <h1>
                    Skills
                </h1>
            </header>
            <div id='web-dev-skills-main'>
                <div id='web-dev-skills-left'>
                    {useWindowDimensions().width > 800 ? 
                        <ul>
                            <li>JavaScript</li>
                            <li>NodeJS</li>
                            <li>ReactJS</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL</li>
                            <li>Git</li>
                        </ul>
                    :
                        <div id='web-dev-skills-top'>
                            <div>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>NodeJS</li>
                                    <li>ReactJS</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>SQL</li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
                <div id='web-dev-skills-center'>
                    <SkillsSphere />
                </div>
                <div id='web-dev-skills-right'>
                    {useWindowDimensions().width > 800 ? 
                        <ul>
                            <li>expressJS</li>
                            <li>Firebase</li>
                            <li>Jest</li>
                            <li>PostgreSQL</li>
                            <li>Mocha</li>
                            <li>three.js</li>
                            <li>npm</li>
                        </ul>
                    :
                        <div id='web-dev-skills-top'>
                            <div>
                                <ul>
                                    <li>Git</li>
                                    <li>expressJS</li>
                                    <li>Firebase</li>
                                    <li>Jest</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>PostgreSQL</li>
                                    <li>Mocha</li>
                                    <li>three.js</li>
                                    <li>npm</li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;