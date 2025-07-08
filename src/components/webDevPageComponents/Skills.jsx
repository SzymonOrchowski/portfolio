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
                        // Desktop View - Left Column
                        <ul>
                            <li>Python</li>
                            <li>JavaScript / TypeScript</li>
                            <li>React / Next.js</li>
                            <li>HTML5 / CSS</li>
                            <li>FastAPI / Express</li>
                            <li>Plotly.js</li>
                            <li>Git / GitHub</li>
                        </ul>
                    :
                        // Mobile View - Top Two Lists
                        <div id='web-dev-skills-top'>
                            <div>
                                <ul>
                                    <li>Python</li>
                                    <li>JavaScript / TypeScript</li>
                                    <li>React / Next.js</li>
                                    <li>HTML5 / CSS</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>FastAPI / Express</li>
                                    <li>Plotly.js</li>
                                    <li>Git / GitHub</li>
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
                        // Desktop View - Right Column
                        <ul>
                            <li>AWS / GCP</li>
                            <li>Docker</li>
                            <li>PostgreSQL / TimescaleDB</li>
                            <li>MongoDB</li>
                            <li>QdrantDB</li>
                            <li>MLOps / Data & AI Tools</li>
                            <li>Agile / Jira / Linear</li>
                        </ul>
                    :
                        // Mobile View - Bottom Two Lists
                        <div id='web-dev-skills-top'>
                            <div>
                                <ul>
                                    <li>AWS / GCP</li>
                                    <li>Docker</li>
                                    <li>PostgreSQL / TimescaleDB</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>QdrantDB</li>
                                    <li>MLOps / Data & AI Tools</li>
                                    <li>Agile / Jira / Linear</li>
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