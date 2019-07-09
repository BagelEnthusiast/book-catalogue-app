import React, { Component } from "react";
import './popup.css';


class AddBookPopup extends Component {


    render() {
        
        return(
         <div>
            <div id="myModal" style={{display: "block"}} className="modal">
                <div className="modal-content">
                    {/* <span className="close">&times;</span> */}
                    <button onClick={() => this.props.onClose()} className="btn waves-effect waves-light" style={{float: "right"}}><i className="fas fa-times"></i></button>
                    <h4>Choose the correct match</h4>

                     <ul className="collection">
                        <li onClick={() => this.props.onAddBook(this.props.option1)} className="collection-item">{`${this.props.option1.volumeInfo.title} by ${this.props.option1.volumeInfo.authors[0]}`}</li>
                        <li onClick={() => this.props.onAddBook(this.props.option2)} className="collection-item">{`${this.props.option2.volumeInfo.title} by ${this.props.option2.volumeInfo.authors[0]}`}</li>
                        <li onClick={() => this.props.onAddBook(this.props.option3)} className="collection-item">{`${this.props.option3.volumeInfo.title} by ${this.props.option3.volumeInfo.authors[0]}`}</li>
                     
                    </ul>
                </div>
            </div>
        </div>
        )
    }

}

export default AddBookPopup;