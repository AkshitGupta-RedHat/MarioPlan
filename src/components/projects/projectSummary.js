import React from 'react'
import ProjetDeatils from './projectDetails'
import { Link } from "react-router-dom";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { frestoreConnect } from 'react-redux-firebase'
// if the error Object is not a funtion then t means the function is not found or defined 
// check the lib import that it it taken as a destructure or not
import moment  from 'moment'
const projectsummary = ({projectsummary}, keys, props) => {
  console.log(projectsummary);
  console.log(projectsummary.id);
  //console.log(props.project);
    return(
    <div className="card z-depth-0 project-summary purple">
        <div className="card-content grey-text text-darken-3 purple-darken-3">
           <Link to = {'/'+ projectsummary.id}>
             <span className="card-title black-text">{projectsummary.title}</span>
           </Link>
            <p>{projectsummary.content}</p>
            <p className="grey-text">Created By: {projectsummary.authorFirstName} {projectsummary.authorLastName}</p>
            <div><p>{moment(projectsummary.createdAt.toDate()).calendar()}</p></div>
            
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