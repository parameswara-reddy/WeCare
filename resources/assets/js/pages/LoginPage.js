import React, { Component } from "react";
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment
} from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { login, getLoggedInUser } from "../actions/auth";
import Logo from "../assets/WeCareLogo.jpg";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: "",
            password: ""
        };
    }

    handleMobileNumberChange = (e, { value }) => {
        this.setState({ mobileNumber: value });
    };

    handlePasswordChange = (e, { value }) => {
        this.setState({ password: value });
    };

    login = () => {
        const { mobileNumber, password } = this.state;
        console.log(mobileNumber, password);
        this.props.login();
    };
    componentDidMount() {
        document.querySelector("#mobileNumber").focus();
    }

    render() {
        const { mobileNumber, password } = this.state;
        const { auth } = this.props;
        console.log(this.props)
        const nextLocation = (this.props.location.state && this.props.location.state.from.pathname) || "/"; 
        return (
            <div className="login-form">
                {auth.loggedIn && <Redirect
                    to={{ pathname: nextLocation, state: { from: this.props.location } }}
                />}
                <Grid
                    textAlign="center"
                    style={{ height: "100%" }}
                    verticalAlign="middle"
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" textAlign="center">
                            <Image src={Logo} />
                            <div color="facebook">Log-in to your account</div>
                        </Header>
                        <Form size="large">
                            <Segment stacked>
                                <Form.Input
                                    id="mobileNumber"
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Mobile Number"
                                    value={mobileNumber}
                                    onChange={this.handleMobileNumberChange}
                                    label={{ icon: "asterisk" }}
                                    labelPosition="right corner"
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="PIN"
                                    type="password"
                                    value={password}
                                    onChange={this.handlePasswordChange}
                                    label={{ icon: "asterisk" }}
                                    labelPosition="right corner"
                                />

                                <Button
                                    color="facebook"
                                    fluid
                                    size="large"
                                    onClick={this.login}
                                >
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
