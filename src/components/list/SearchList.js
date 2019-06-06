import React , { Component } from 'react'
import axios from 'axios'

class SearchList extends Component{
    state ={
        search:'',
        response: []
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })


    }
    handleSubmit = async(e)=>{
        e.preventDefault();
        await this.fetchData(this.state.search)
        
    }
    fetchData = async(query) =>{
        const endpoint = "https://api.foursquare.com/v2/venues/explore?"
        const params = {
            client_id: "OPZUDDETYQPGFP2ENBQO43EFCPUXKHXBD14BCUCAPLCUJTDT",
            client_secret:"W2JH5Z11J1KCODNLMCSQ5AAABULDV1POVOMHW5W5ITDEJE5H",
            near: "Los Angeles,CA",
            query: query,
            limit: 10,
            v:"20180323"
        }
        axios.get(endpoint+new URLSearchParams(params)).then(response=>{
            this.setState({response: response.data.response.groups[0].items})
        })
        console.log(this.state)
        
    }

    render()
    {
        return(
        <div className="searchContainer">
            <h5>Search</h5>
                <div className="input">
                    <form onSubmit={this.handleSubmit}>
                        <input type='text'  onChange={this.handleChange} id='search'></input>
                        <button className="btn red lighten-1">Search</button>
                    </form>
                    
                </div>
        </div>
    )
}

    
}

export default SearchList