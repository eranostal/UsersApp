import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class UserDetails extends Component {
    
    
    //Empty objects are not considered null.
    render() {

        const {name, username, email, address, phone, website, company} = this.props.selectedUser;

        return (
            <div className="user-details-card">
                <h3>{name}</h3>
                <section className="basic">
                    <h4><span>Name:</span> {username}</h4>
                    <h4><span>Email:</span> {email}</h4>
                    <h4><span>Phone:</span> {phone}</h4>
                </section>
                <section className="address">
                    <h4><span>Street:</span> {address.street}</h4>
                    <h4><span>Suite:</span> {address.suite}</h4>
                    <h4><span>City:</span> {address.city}</h4>
                    <h4><span>Zipcode:</span> {address.zipcode}</h4>
                </section>
                <section className="company">
                    <h4><span>Company Name:</span> {company.name}</h4>
                    <h4><span>Catchphrase:</span> {company.catchPhrase}</h4>
                    <h4><span>Mission Statement:</span> {company.bs}</h4>
                </section>
                <h4><a href={"http://" + website} target="_blank" rel="noopener noreferrer">{website}</a></h4>
            </div>
        )
    }
}

UserDetails.propTypes = {
    selectedUser: PropTypes.object.isRequired
}

export default UserDetails
