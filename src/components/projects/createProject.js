import React, { Component } from 'react'
import {connect } from 'react-redux'
import {projectActions} from '../../store/actions/projectactions'
import { Redirect } from 'react-router-dom'
class createProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
       // console.log(this.state);
     
        this.props.createproject(this.state);
       this.props.history.push('/');
    }

    render() {
        console.log(this.props);
       const {isLogIn }= this.props;
        if(!isLogIn){
            return (
                <Redirect to ='/signin' />
            )
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="black">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input className= "white-text" type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Content</label>
                        <textarea id="content" className="materialize-textarea white-text" onChange={this.handleChange}></textarea>
                    </div>
                <button className="white-text pink z-depth-2">Create</button>
                </form>
            </div> 
        )

    }
}


const mapStateToProps = (state) =>{
    return{
        isLogIn: state.firebase.auth.uid
     }
    }

const mapDispatchToProps = (dispatch) =>{
return{
    createproject: project=>dispatch(projectActions(project))

 }
}
export default connect(mapStateToProps, mapDispatchToProps)(createProject)