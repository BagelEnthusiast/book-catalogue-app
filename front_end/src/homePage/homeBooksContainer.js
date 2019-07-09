import React, { Component } from "react";
import HomeBookCard from './HomeBookCard'



class HomeBooksContainer extends Component {

    render() {
        
        return(
        <div style={{width: "100%"}}>
            <div style={{width: "900px", marginLeft: "auto", marginRight: "auto"}}>
           {this.props.authorBooks.map(book => <HomeBookCard book={book} key={book._id}/>)}
            </div>
        </div>
        )
    }

}

export default HomeBooksContainer;