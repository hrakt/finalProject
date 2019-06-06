const initState = {
    lists:[
        {id:'1',title:'first list title',content:'stuff'},
        {id:'2',title:'second list title',content:'stuff'},
        {id:'3',title:'third list title',content:'stuff'}
    ]
}

const listReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CREATE_LIST':
            console.log('created list', action.list)
            return state;
        case 'CREATE_LIST_ERR':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }
}
    
export default listReducer