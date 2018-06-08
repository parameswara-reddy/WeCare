import React, { Component } from "react";
import {
    Container,
    Card,
    Header,
    Button,
    Icon,
    Loader,
    Dimmer,
    Segment
} from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchUsers } from "../actions/users";

class UsersListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.fetchUsers();
    }
    getIcon = (role) => {
        switch(role) {
            case "admin":
                return "user circle outline";
            case "clinic_admin":
                return "user circle";
            case "doctor":
                return "doctor";
            default:
                return "user outline";
        }
    }

    editUser = (evt, {value}) => {
        this.props.history.push("/user/" + value.id);
    }

    deleteUser = (evt, {value}) => {
        const user = value;
        if (
            confirm(
                "Are you sure you want to delete '" + user.display_name + "'?"
            )
        ) {
            console.log("Deleting " + user.display_name);
        }
    };

    render() {
        const { usersStore } = this.props;
        const { users, loadingUsers } = usersStore;
        return (
            <Segment>
                <Header><Icon name="users"/> List of Users
                </Header>
                <Dimmer active={loadingUsers}>
                    <Loader>Loadng Clinics</Loader>
                </Dimmer>
                {users.length > 0 ? (
                    <Card.Group doubling stackable itemsPerRow={4}>
                        {users.map(user => (
                            <Card key={user.id} className="animated zoomIn">
                                <Card.Content>
                                    <Card.Header>
                                        <Icon size="large" name={this.getIcon(user.role)}/>{user.display_name.toUpperCase()}
                                    </Card.Header>
                                    <Card.Meta>
                                        {user.mobile_number}
                                    </Card.Meta>
                                    <Card.Meta>
                                        {user.email}
                                    </Card.Meta>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className="ui two buttons">
                                        <Button basic color="green" value={user} onClick={this.editUser}>
                                            <Icon name="cogs" />
                                            Edit
                                        </Button>
                                        <Button basic color="red" value={user} onClick={this.deleteUser}>
                                            <Icon name="trash" />
                                            Delete
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        ))}
                    </Card.Group>
                ) : (
                    <div>No users registered</div>
                )}
            </Segment>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        usersStore: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchUsers
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);
