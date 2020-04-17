import React, { Component } from 'react'

const  ProjectDetails =(props) => {
        const id = props.match.params.id;
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Titles - {id}</span>
                        <p>data</p>
                    </div>
                    <div className ="card-action gret lighten-4 grey-text"/>
                    <div>Posted by the net ninja</div>   
                </div>
            </div>
        )
    
}
export default ProjectDetails