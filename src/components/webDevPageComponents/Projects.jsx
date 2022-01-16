import React from 'react';
import projectsData from '../../data/devProjects.json'
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div id='web-dev-projects-container'>
            <header>
                <h1>
                    My Projects
                </h1>
            </header>
            <div id='web-dev-projects-all'>
                {projectsData.projects.map((project, index)=>{
                    return <ProjectCard key={project.id} project={project} index={index}/>
                })}
            </div>
        </div>
    );
};

export default Projects;