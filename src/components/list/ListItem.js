import React from 'react'
import moment from 'moment'

const ListItem = ({list}) =>{
    return(
        <div className="card z-depth-0 project-summary">
                <div className="card-conent gret-text text-darken-3">
                    <span className="card-title">{list.title}</span>
                    <p>Created by {list.authorFirstName} {list.authorLastName}</p>
                    <p className="grey-text">{moment(list.createdAt.toDate().toString()).calendar()}</p>
                </div>
        </div>
    )
}

export default ListItem