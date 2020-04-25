import React, {Component} from 'react'
import Notification from './notification'
import ProjectList from '../projects/projectList'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose } from 'redux'
class Dashboard extends Component {
    render(){
        return(
            <div  className="dashboard container">
             <div className="row">
                 <div className="col s3 m6">
                     <ProjectList projectsdata={this.props.project}/>
                 </div>
                 <div className="col s12 m5 offset-m1">
                    <Notification />
                 </div>
             </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) =>{ 
    console.log('dashboard', state);
    return {
        project : state.firestoreReducer.ordered.project
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection: 'project'}
    ])
)(Dashboard)