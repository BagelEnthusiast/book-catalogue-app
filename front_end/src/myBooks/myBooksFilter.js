import React, { Component } from "react";




class MyBooksFilter extends Component {

    constructor() {
        super()
        this.state = {
            searchInput: ""
        }
    }

    updateInput = (text) => {
        
        this.setState({
            searchInput: text
        })
    }

    render() {
        
        return(
            <div>
                <form onSubmit={(e) => {e.preventDefault(); this.props.onSearchMyBooks(this.state.searchInput)}}>
                    <input onChange={(e) => this.updateInput(e.target.value)} type="text" placeholder="Search My Books.."/>
                    <button className="btn waves-effect waves-light" type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        )
    }

}

export default MyBooksFilter;