import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchUsers }       from '../actions';

class UsersListPage extends Component {
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
                List of Users:
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
    // Reason: we want to use redux before rendering
    return store.dispatch(fetchUsers());
}

export {loadData};
export default connect(mapStateToProps, {fetchUsers})(UsersListPage);