import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    Dimmer,
    Loader,
    Image,
    Segment,
    Container,
    Menu,
    Button,
    Icon,
    Item,
    Label,
    Header
} from "semantic-ui-react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";

import Logo from "../assets/WeCareLogo.jpg";

import { login, getLoggedInUser } from "../actions/auth";

import Login from "./LoginPage";
import Dashboard from "./DashboardPage";
import Home from "./HomePage";
import ClinicList from "./ClinicListPage";
import UsersList from "./UsersListPage";
import CreateClinic from "./CreateClinicPage";
import CreateUserPage from "./CreateUserPage";

export class IndexPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (sessionStorage.getItem("we_care_token")) {
            this.props.login();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (
            nextProps.auth.loggedIn &&
            !nextProps.auth.user &&
            !nextProps.auth.loadingUser
        ) {
            this.props.getLoggedInUser();
        }
    }
    render() {
        const { auth } = this.props;
        const { loggedIn, loginLoading } = auth;
        return (
            <div className="container">
                <Dimmer active={loginLoading}>
                    <Loader />
                </Dimmer>
                <Router path="/">
                    <Switch>
                        <Route path="/login" component={Login} />
                        {!loginLoading && (
                            <div>
                                <PrivateRoute
                                    authed={loggedIn}
                                    auth={auth}
                                    path="/clinics"
                                    exact
                                    component={ClinicList}
                                />
                                <PrivateRoute
                                    authed={loggedIn}
                                    auth={auth}
                                    path="/createClinic"
                                    exact
                                    component={CreateClinic}
                                />
                                <PrivateRoute
                                    authed={loggedIn}
                                    auth={auth}
                                    path="/users"
                                    exact
                                    component={UsersList}
                                />
                                <PrivateRoute
                                    authed={loggedIn}
                                    auth={auth}
                                    path="/user/:id?"
                                    exact
                                    component={CreateUserPage}
                                />
                                <PrivateRoute
                                    authed={loggedIn}
                                    auth={auth}
                                    exact
                                    path="/"
                                    component={Dashboard}
                                />
                            </div>
                        )}
                    </Switch>
                </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);

function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                authed ? (
                    <SiteWrapper {...rest}>
                        <Component {...props} />
                    </SiteWrapper>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export const SiteWrapper = props => {
    let activeItem = "home";
    let fixed = true;
    const user = (props.auth && props.auth.user && props.auth.user) || {};
    const avatar = (user.display_name) && (user.display_name.charAt(0))
    return (
        <div>
            <Menu
                fixed={fixed ? "top" : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                color="violet"
                inverted
            >
                <Container fluid={true} >
                    <Menu.Item fitted="vertically">
                        <a href="/"><Image src={Logo} circular style={{ width: "45px" }} /></a>{" "}<span style={{fontSize: "200%"}}>WeCare</span>
                    </Menu.Item>
                    <Menu.Menu position="right">
                        {avatar && <Menu.Item fitted>
                            <Item className="animated fadeIn">
                                <Label content={avatar} circular size="huge"/>
                                <Item.Content>
                                    <Item.Header as="big">
                                        <b>{user.display_name || " "}</b>
                                    </Item.Header>
                                    <Item.Meta>{user.role ||" "}</Item.Meta>
                                </Item.Content>
                            </Item>
                        </Menu.Item>}
                        <Menu.Item>
                            <Button as="a" inverted={!fixed}>
                                Logout
                            </Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
            <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
                {props.children}
            </Container>
        </div>
    );
};
