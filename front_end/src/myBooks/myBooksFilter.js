import React, { Component } from "react";




class MyBooksFilter extends Component {

    render() {
        
        return(
        <div>
            
            <button className='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</button>

            
            <ul id='dropdown1' className='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider" tabIndex="-1"></li>
                <li><a href="#!">three</a></li>
                <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
            </ul>
        </div>
        )
    }

}

export default MyBooksFilter;