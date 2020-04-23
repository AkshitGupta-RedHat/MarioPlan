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
    console.log('up',state,action);
    switch (action.type) {
        case 'CREATE_PROJECT':
        console.log('created project', action.project);
        return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created erroe project', action.project)
            return state;
        }
    // if(action.type="CREATE_PROJECT"){
    //     let newstate = state.projects.filter(project => {
    //         return project.id ==action.id;
    //     }); 
    //     return {
    //         ...state,
    //         posts:newstate 
    //     }

    // }
    return state;
}
export default projectReducer