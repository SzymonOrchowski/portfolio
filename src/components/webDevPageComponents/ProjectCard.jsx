import React from 'react';

const ProjectCard = ({project, index}) => {
    return (
        <div id='project-card-container'>
            {index % 2 === 0 ? 
            <div id='project-card-image-div'>
                <img id='project-card-image' src={process.env.PUBLIC_URL + '/img/dev-projects' + project.imageLink} alt={project.name}/>
            </div>
            : null
            }
            <div id='project-card-description'>
                <div id='project-name'>
                    {project.name}
                </div>
                <div id='project-subheading'>
                    {project.subheading}
                </div>
                <div id='project-description'>
                    {project.description}
                </div>
                {project.deployedLink !== "" ? 
                    <div id='project-run-app-button'>
                        {project.deployedLink}
                    </div>
                : null}
                <div id='project-repo'>
                    {project.repoLink}
                </div>
            </div>
            {index % 2 === 1 ? 
            <div id='project-card-image-div'>
                <img id='project-card-image' src={process.env.PUBLIC_URL + '/img/dev-projects' + project.imageLink} alt={project.name}/>
            </div>
            : null
            }
        </div>
    );
};

export default ProjectCard;