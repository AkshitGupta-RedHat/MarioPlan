import React from 'react'
import ProjetDeatils from './projectDetails'
import { Link } from "react-router-dom";
const ProjectSummary = () => {
   
    return(
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
           <Link to = {'/'+ Math.random()}>
             <span className="card-title">Project Title</span>
           </Link>
            <p>Posted by the Net Ninja</p>
            <p className="grey-text">3rd September, 2am</p>
        </div>
    </div>
    )
 }

 export default ProjectSummary