import React, { Component } from "react";



class SearchBar extends Component {

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
        // console.log(this.state.searchInput)
        return(
        <div>
            <form onSubmit={(e) => {e.preventDefault(); this.props.onSearch(this.state.searchInput)}}>
                <input onChange={(e) => this.updateInput(e.target.value)} type="text" placeholder="Search for a Book.."/>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }

}

export default SearchBar;