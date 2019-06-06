import React from 'react'
import ListItem from '../list/ListItem'
import {Link} from 'react-router-dom'


const UserList = ({lists}) =>{
    return(

         <div className="user-list section">
            {lists && lists.map(list =>{
                return(
                    
                    <Link to={'/listitem/' + list.id}key={list.id}>
                        <ListItem list={list} key={list.id}/>
                    </Link>
                    
                )
            })}
    
        </div>
        

       
    )
}

export default UserList