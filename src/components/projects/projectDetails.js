import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteprojects} from '../../action/action'

const  projectDetails =(props) => {
        const id = props.match.params.id;
        console.log(props);
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content black">
                        <span className="card-title purple-text">{props.project.title} - {id}</span>
                        <p className="white-text">data</p>
                        <p className="white-text">{props.project.date}</p>
                    </div>
                </div>
            </div>
        )
    
}

const mapPropstoStore = (state, ownprops) =>{
    let id = "1";
    return {
        project : state.projectreducer.projects.find(project => project.id === id)
    }
}

// const mapDeletetoProps = (dispatch) =>{
//     return {
//         deleteproject : id => dispatch(deleteprojects(id))
//     }
// }

export default connect(mapPropstoStore)(projectDetails)