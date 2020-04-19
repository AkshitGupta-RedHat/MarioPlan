import React, {Component} from 'react'
import Notification from './notification'
import ProjectList from '../projects/projectList'
import { connect } from 'react-redux'

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

const mapPropstoStore = (state) =>{ 
    return {
        project : state.projectreducer.projects
    }
}

export default connect(mapPropstoStore)(Dashboard)