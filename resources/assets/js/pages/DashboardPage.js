import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    Header,
    Grid,
    Segment,
    List,
    Statistic,
    Icon,
    Divider,
    Card,
    Button
} from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { login, getLoggedInUser } from "../actions/auth";

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    manageUsers = () => {
        this.props.history.push("/users")
    }
    addUser = () => {
        this.props.history.push("/createUser")
    }
    manageClinics = () => {
        this.props.history.push("/clinics")
    }
    addClinic = () => {
        this.props.history.push("/createClinic")
    }


    render() {
        const user = this.props.auth.user || {};
        return (
            <div>
                <Grid stretched>
                    <Grid.Row>
                        <Grid.Column width={8}  className="animated slideInLeft">
                            <Segment
                                raised
                                padded="very"
                                color="blue"
                            >
                                <div style={{ fontSize: "200%" }}>
                                    <Header textAlign="center">
                                        <Icon
                                            name="user"
                                            size="huge"
                                            circular
                                        />
                                    </Header>
                                    <Header textAlign="center">
                                        {user.display_name}
                                    </Header>
                                </div>
                                <Divider />
                                <List size="large">
                                    <List.Item>
                                        <List.Icon size="large" name="call" />
                                        <List.Content>
                                            <List.Header>
                                                <a
                                                    href={
                                                        "tel:" +
                                                        user.mobile_number
                                                    }
                                                >
                                                    {user.mobile_number}
                                                </a>
                                            </List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon size="large" name="mail" />
                                        <List.Content>
                                            <List.Header>
                                                <a
                                                    href={
                                                        "mailto:" + user.email
                                                    }
                                                >
                                                    {user.email}
                                                </a>
                                            </List.Header>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={8} className="animated slideInRight">
                            <Card fluid raised>
                                <Card.Content textAlign="center">
                                    <Statistic horizontal>
                                        <Statistic.Value>
                                            <Icon name="hospital" circular />{" "}
                                            30+
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            Hospitals
                                        </Statistic.Label>
                                    </Statistic>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className="ui two buttons">
                                        <Button basic color="green" onClick={this.manageClinics}>
                                            <Icon name="cogs" />
                                            Manage
                                        </Button>
                                        <Button basic color="orange" onClick={this.addClinic}>
                                            <Icon name="add square" />
                                            Add
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>

                            {/* Doctors card */}
                            <Card fluid raised>
                                <Card.Content textAlign="center">
                                    <Statistic horizontal>
                                        <Statistic.Value>
                                            <Icon name="users" circular />{" "}
                                            100+
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            Users
                                        </Statistic.Label>
                                    </Statistic>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className="ui two buttons">
                                        <Button basic color="green" onClick={this.manageUsers}>
                                            <Icon name="cogs" />
                                            Manage
                                        </Button>
                                        <Button basic color="orange" onClick={this.addUser}>
                                            <Icon name="add square" />
                                            Add
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            login,
            getLoggedInUser
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
