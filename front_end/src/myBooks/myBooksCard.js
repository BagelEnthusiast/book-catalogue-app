import React, { Component } from "react";
import './myBooksCard.css';



class MyBooksCard extends Component {

    constructor() {
        super()
        this.state = {
            rating: 4
        }
       
    }

    render() {
        console.log(this.state.rating)
        const ratingStars = []
        for (let i = 1; i < 5; i++) {
            ratingStars.push(
            <button onClick={() => 
                {this.props.onRate(this.props.book._id, i)
                 this.setState({rating: i})} }>{this.props.book.rating < i ? <i className="far fa-star"> </i> : <i className="fas fa-star"></i>}</button>
                 )
        }
        return(
            
        <div style={{float: "left"}}>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card" style={{width: "274px"}}>
                        <div className="card-image">
                            <img className="activator" style={{height: "400px", width: "274px"}} id="bookImage" src={this.props.book.img_url} alt=""/>
                            {/* <div className="card-title">{this.props.book.title}</div> */}
                            {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
                            <button onClick={() => this.props.onDelete(this.props.book)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">-</i></button>
                           
                        </div>
                        <div className="card-content">
                        <span>{this.props.book.author ? this.props.book.author : null}</span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{this.props.book.title}<i className="fas fa-times" style={{float: "right"}}></i></span>
                            <p>{this.props.book.author ? this.props.book.author : null}</p>
                            <p>Current Page: {this.props.book.currentPage}</p>
                            <p>Rating: {this.props.book.rating}</p>
                            {ratingStars}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }

}

export default MyBooksCard;