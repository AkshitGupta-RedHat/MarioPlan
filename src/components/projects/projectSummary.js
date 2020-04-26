import React from 'react'
import ProjetDeatils from './projectDetails'
import { Link } from "react-router-dom";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { frestoreConnect } from 'react-redux-firebase'
const projectsummary = (projectsummary, keys, props) => {
  console.log(projectsummary);
  console.log(projectsummary.projectsummary.id);
  //console.log(props.project);
    return(
    <div className="card z-depth-0 project-summary purple">
        <div className="card-content grey-text text-darken-3 purple-darken-3">
           <Link to = {'/'+ projectsummary.projectsummary.id}>
             <span className="card-title black-text">{projectsummary.projectsummary.title}</span>
           </Link>
            <p>{projectsummary.projectsummary.content}</p>
            <p className="grey-text">Created By: {projectsummary.projectsummary.authorFirstName} {projectsummary.projectsummary.authorLastName}</p>
            
        </div>
    </div>
    )
 }


 const mapPropstoState = (state)=>{
   return {
    project : state.firestoreReducer.ordered.project
   }
 }
 export default connect(mapPropstoState)(projectsummary)