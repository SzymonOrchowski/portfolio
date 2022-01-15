import React from 'react';
import { useWindowDimensions } from '../../utils/utils';
import iconmonstrGithub from '../../img/icons/iconmonstrGithub.png'

const ProjectCard = ({project, index}) => {
    const width = useWindowDimensions().width
    
    return (
        <div id='project-card-container'>
            {index % 2 === 0 && width > 800 ? 
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
                <div id='project-links'>
                    {project.deployedLink !== "" ? 
                        <div id='project-run-app-button'>
                            {project.deployedLink}
                        </div>
                    : null}
                    <div id='project-repo'>
                        <img id='menu-footer-github-icon' src={iconmonstrGithub} alt='Github Link' width='70' onClick={()=>{window.open(project.repoLink)}}/>
                    </div>
                </div>
            </div>
            {index % 2 === 1 || width < 800 ? 
            <div id='project-card-image-div'>
                <img id='project-card-image' src={process.env.PUBLIC_URL + '/img/dev-projects' + project.imageLink} alt={project.name}/>
            </div>
            : null
            }
        </div>
    );
};

export default ProjectCard;