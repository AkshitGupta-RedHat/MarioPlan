import React from 'react'
import ProjetDeatils from './projectDetails'
import { Link } from "react-router-dom";
const projectsummary = (projectsummary, keys) => {
  console.log(projectsummary);
  console.log(projectsummary.projectsummary.id);
    return(
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
           <Link to = {'/'+ projectsummary.projectsummary.id}>
             <span className="card-title">{projectsummary.projectsummary.id}</span>
           </Link>
            <p>{}</p>
            <p className="grey-text">3rd September, 2am</p>
        </div>
    </div>
    )
 }

 export default projectsummary