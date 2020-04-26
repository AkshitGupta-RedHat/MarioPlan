import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteprojects} from '../../action/action'
import { firestore } from 'firebase';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom'


const  projectDetails =(props) => {
        const id = props.match.params.id;
        //destructure the project means project was in props but now we can direccrly access it
        // why prject.id s null because it takes some time from the redux state to update the project props
        const { project } = props;

        const {isLogIn }= props;
        console.log(props);
        if(!isLogIn){
            return (
                <Redirect to ='/signin' />
            )
        }
        if(project){
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content black">
                        <span className="card-title purple-text">{project.title}- {id}</span>
                        
                        <p className="white-text"></p>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content black">
                     
                        <p className="white-text">Loadng....</p>
                        <p className="white-text"></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    const projects = state.firestoreReducer.data.project;
    const project = projects ? projects[id]: null;

    console.log(state);
    return {
        project : project,
        isLogIn : state.firebase.auth.uid
    }
}

// const mapDeletetoProps = (dispatch) =>{
//     return {
//         deleteproject : id => dispatch(deleteprojects(id))
//     }
// }

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection: 'project'}
    ])
)(projectDetails)