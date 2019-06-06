import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createList} from '../../store/actions/listActions'
import {Redirect} from 'react-router-dom'
import SearchList from './SearchList' 

class CreateList extends Component {
    state ={
        title:''
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.createList(this.state);
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create List</h5>  
                    <div className="input-fields">
                        <label htmlFor="text">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    
                    <div className="input-field">
                        <button className="btn red lighten-1">Create</button>
                    </div>
                </form>
                <div className="search-container">
                        <SearchList />
                    </div>
            
            </div>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createList: (list) =>dispatch(createList(list))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateList)
