import React from 'react';

const ProjectCard = ({project, index}) => {
    return (
        <div id='project-card-container'>
            {index % 2 === 0 ? 
            <div id='project-card-image-div'>
                <img id='project-card-image' src={process.env.PUBLIC_URL + '/img/dev-projects' + project.imageLink}/>
            </div>
            : null
            }
            <div id='project-card-description'>
                <div>
                    {project.name}
                </div>
                <div>
                    {project.subheading}
                </div>
                <div>
                    {project.description}
                </div>
                <div>
                    {project.repoLink}
                </div>
            </div>
            {index % 2 === 1 ? 
            <div id='project-card-image-div'>
                <img id='project-card-image' src={process.env.PUBLIC_URL + '/img/dev-projects' + project.imageLink}/>
            </div>
            : null
            }
        </div>
    );
};

export default ProjectCard;