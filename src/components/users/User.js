import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {



    render(){
        const {user: {id, name, username, email}, isSelected} = this.props;
        return (
            <div style={(isSelected === true) ? selectedStyles : null} onClick={() => {this.props.grabSelectedUser(id);}} className="card">
                {name}<br/>{username}<br/>{email}
            </div>
        )
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    isSelected: PropTypes.bool
}


const selectedStyles = {
    backgroundColor: "var(--main-color)",
    color: "#FFF",
    boxShadow: "6px solid #333"
}

export default User
