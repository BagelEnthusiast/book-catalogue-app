import React, { Component } from "react";
import './homeBookCard.css'



class HomeBookCard extends Component {


    render() {
        
        
        return(
            
        <div style={{float: "left"}}>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card" style={{width: "274px"}}>
                        <div className="card-image">
                            <img className="activator" style={{height: "400px", width: "274px"}} id="bookImage" src={this.props.book.volumeInfo.imageLinks ? this.props.book.volumeInfo.imageLinks.thumbnail.replace("zoom=1", "zoom=0") : this.props.book.volumeInfo.title} alt=""/>
                            {/* <div className="card-title">{this.props.book.title}</div> */}
                            {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
                            <button onClick={() => this.props.onAdd(this.props.book)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></button>
                           
                        </div>
                        <div className="card-content">
                        <span>{this.props.book.volumeInfo.authors ? this.props.book.volumeInfo.authors[0] : null}</span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{this.props.book.volumeInfo.title}<i className="fas fa-times" style={{float: "right"}}></i></span>
                            <p style={{fontWeight: "bold"}}>{this.props.book.volumeInfo.authors ? this.props.book.volumeInfo.authors[0] : null}</p>
                            <p>{this.props.book.volumeInfo.description ? this.props.book.volumeInfo.description : null}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }

}

export default HomeBookCard;