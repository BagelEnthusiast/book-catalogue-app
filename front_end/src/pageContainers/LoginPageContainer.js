import React from 'react';
import LoginForm from '../loginPage/LoginForm'


class LoginPageContainer extends React.Component {

    login = (uName, pw) => {
        
        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(users => {
            let u = users.find(user => user.username === uName && user.password === pw)
            if (u !== undefined) {
                localStorage.setItem("currentUser", uName)
                localStorage.setItem("userId", u._id)
                window.location.replace("/mybooks")
                
            } else {
                alert("Invalid Username or Password")
            }

        
        // console.log(localStorage.getItem("currentUser"))
        })
       
    }

    render() {
    return(
        <div className="container">
            
            <LoginForm login={this.login}/>
        </div>
    ) 
    }
}

export default LoginPageContainer;