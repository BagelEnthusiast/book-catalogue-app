import React, { Component } from "react";
import './homeBookCard.css'



class HomeBookCard extends Component {


    render() {
        console.log(this.props.book.volumeInfo.imageLinks.thumbnail)
        
        return(
            
        <div style={{float: "left"}}>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card" style={{width: "274px"}}>
                        <div className="card-image">
                            <img className="activator" style={{height: "400px", width: "274px"}} id="bookImage" src={this.props.book.volumeInfo.imageLinks.thumbnail.replace("zoom=1", "zoom=0")} alt=""/>
                            {/* <div className="card-title">{this.props.book.title}</div> */}
                            {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
                            <button onClick={() => this.props.onAddBook(this.props.book)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></button>
                           
                        </div>
                        <div className="card-content">
                        <span>{this.props.book.volumeInfo.authors[0]}</span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{this.props.book.volumeInfo.title}<i className="fas fa-times" style={{float: "right"}}></i></span>
                            <p>{this.props.book.volumeInfo.authors[0]}</p>
                            <p>Current Page: {this.props.book.currentPage}</p>
                            <p>Rating: {this.props.book.rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }

}

export default HomeBookCard;