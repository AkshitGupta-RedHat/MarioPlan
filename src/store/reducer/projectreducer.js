const initState= {
    projects:[
        {"id":'1',
        "title" : "Project 1",
        "date":"18/04/2020"},
        {"id":'2',
        "title" : "Project 2",
        "date":"18/04/2020"},
        {"id":'3',
        "title" : "Project 2",
        "date":"18/04/2020"},
    ]
}

const projectReducer = (state = initState, action) => {
    console.log(state,action);
    if(action.type="DELETE_POST"){
        let newstate = state.projects.filter(project => {
            return project.id ==action.id;
        }); 
        return {
            ...state,
            posts:newstate 
        }

    }
    return state;
}
export default projectReducer