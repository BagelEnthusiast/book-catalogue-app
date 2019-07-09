import React from 'react';
import RecommendedList from '../homePage/RecommendedList'

class HomePageContainer extends React.Component {

    render() {
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                <RecommendedList/>
            </div>

            
        ) 
    }
}

export default HomePageContainer;