import React from 'react';
import './RecommendedList.css'

class RecommendedList extends React.Component {

render() {
    return(
        <div className="card middle">
            <div className="front">
                <img src="img.jpg" alt=""/>
            </div>
            <div className="back">
                <div className="back-content middle">
                    <h2>Book Title</h2>
                    <span>Book Author</span>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>

    )
}
}

export default RecommendedList;