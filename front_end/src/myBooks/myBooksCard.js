import React, { Component } from "react";



class MyBooksCard extends Component {


    render() {
        
        return(
            
        <div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.book.img_url}/>
                            <span className="card-title">{this.props.book.title}</span>
                            {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
                        </div>
                        <div className="card-content">
                            <p>{this.props.book.author}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }

}

export default MyBooksCard;