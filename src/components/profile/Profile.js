import React, {Component} from 'react'
import Activity from './Activity'
import UserList from '../list/UserList'
import {connect} from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect } from 'react-router-dom'

class Profile extends Component {
    render(){
        const {lists,auth,notification} = this.props
        if(!auth.uid) return <Redirect to='/signin' />

        return(
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s12 m6">
                        <UserList lists ={lists}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Activity  notifications={notification}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        lists: state.firestore.ordered.lists,
        auth: state.firebase.auth,
        notification:state.firestore.ordered.notification
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'lists',orderBy: ['createdAt', 'desc']},
        {collection: 'notification', limit: 3, orderBy: ['time', 'desc']}

    ])
)(Profile) ;