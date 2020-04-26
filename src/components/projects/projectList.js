import React from 'react'
import ProjectSummary from './projectSummary'

const ProjectList = ({projectsdata}) => {
    console.log("projectsdata", projectsdata)
    return (
        <div className="project-list section"> 
            {projectsdata && projectsdata.map(projectdata => {
                console.log(projectdata);
                return(
                    <ProjectSummary projectsummary ={projectdata} />   
                )  
            })}  
        </div>
    )
}
export default ProjectList