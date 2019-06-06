import React, { Component } from 'react'
import { connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux' 
import {Redirect} from 'react-router-dom'
import moment from 'moment'

const ListContent =(props) => {
    console.log(props)
    const {list , auth} = props;
    if(!auth.uid) return <Redirect to='/signin' />

    if(list){
        return (
            <div className ="container section list-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{list.title}</span>
                        <p>the list will go here</p>
                    </div>
                    <div className="card-action lighten grey-text">
                        <div > Posted by {list.authorFirstName} {list.authorLastName}</div>
                        <div>{moment(list.createdAt.toDate().toString()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <p>Loading content</p>
            </div>
        )
    }
        
    
}

const mapStateToProps = (state,ownProps) =>{
    console.log(state)
    const id = ownProps.match.params.id
    const lists = state.firestore.data.lists
    const list = lists ? lists[id] : null
    return {
        list: list,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection :'lists'}
    ])
)(ListContent)
