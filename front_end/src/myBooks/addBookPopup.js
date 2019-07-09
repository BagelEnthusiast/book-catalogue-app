import React, { Component } from "react";
import './popup.css';


class AddBookPopup extends Component {


    render() {
        
        return(
         <div>
        {/* //     <button data-target="modal1" className="btn modal-trigger">Modal</button>
        //     <div id="modal1" className="modal">
        //         <div className="modal-content">
        //             <h4>Modal Header</h4>
        //             <p>{this.props.option1}</p>
        //             <p>{this.props.option2}</p>
        //             <p>{this.props.option3}</p>
        //         </div>
        //         <div className="modal-footer">
        //             <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
        //         </div>
        //     </div> */}
{/* <button onClick={() => document.querySelector("#myModal").style.display="block"} id="myBtn">Open Modal</button> */}
            
            <div id="myModal" style={{display: "block"}} className="modal">
                <div className="modal-content">
                    {/* <span className="close">&times;</span> */}
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