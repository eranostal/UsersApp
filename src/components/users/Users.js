import React, { Component, Fragment } from 'react';
import User from './User';
import UserDetails from './UserDetails';
import PropTypes from 'prop-types';

class Users extends Component {


    render(){
        const {users, selectedUser, loading, grabSelectedUser} = this.props;
        console.log(selectedUser);
        return (
            <Fragment>
                <div className="user-panel">
                    <div className="header"><h2>Users</h2></div>
                    {loading && <p>Loading..</p>}
                    {users.map(user => (
                        <User key={user.id} user={user} grabSelectedUser={grabSelectedUser} isSelected={selectedUser !== null && selectedUser.id === user.id ? true : false}/>
                    ))}
                </div>
                <div className="user-details">
                    {selectedUser !== null && <UserDetails key={selectedUser.id} selectedUser={selectedUser}/>}
                </div>
            </Fragment>
        )
    }    

}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    selectedUser: PropTypes.object,
    loading: PropTypes.bool,
    grabSelectedUser: PropTypes.func.isRequired
}

export default Users
