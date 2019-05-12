import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchUsers }       from '../actions';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={ user.id }>{ user.name }</li>;
        })
    }

    render() {
        return (
            <div>
                List of Users: <br/>
                - Fetched this data on the serverside <br/>
                - Putting that data into redux store <br/>
                - Rendering the result <br/>
                - Sending it back to the user <br/>
                <ul>{ this.renderUsers() }</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {users: state.users}
}

function loadData(store) {
    // manually dispatch action creator
    return store.dispatch(fetchUsers());
}

export {loadData};
export default connect(mapStateToProps, {fetchUsers})(UsersList);