import React, {Component} from 'react'
import Notification from './notification'
import ProjectList from '../projects/projectList'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose } from 'redux' 
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
    render(){
        const { isLogIn }= this.props;
        const {notifications} = this.props;
        console.log(this.props);
        if (!isLogIn){
            return(
            <Redirect to='/signin' />
        )}
        return(
            <div  className="dashboard container">
             <div className="row">
                 <div className="col s3 m6">
                     <ProjectList projectsdata={this.props.project}/>
                 </div>
                 <div className="col s12 m5 offset-m1">
                    <Notification notifications={notifications}/>
                 </div>
             </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) =>{ 
    console.log('dashboard', state);
    return {
        project : state.firestoreReducer.ordered.project,
        isLogIn: state.firebase.auth.uid,
        notifications: state.firestoreReducer.ordered.notifications
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection: 'project'},
        {collection: 'notifications', limit: 3}
    ])
)(Dashboard)