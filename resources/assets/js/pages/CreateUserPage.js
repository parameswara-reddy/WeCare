import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    Header,
    Form,
    TextArea,
    Select,
    Checkbox,
    Button,
    Input
} from "semantic-ui-react";

import { getUser, createUser, updateUser, deleteUser } from "../actions/user";

class CreateUserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            mobile_number: "",
            role: "",
            doctor_id: "",
            termsAgreed: false
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const params = match.params || {};
        const id = params.id || "";
        id && this.props.getUser(id);
    }

    componentWillReceiveProps(nextProps) {
        const user = nextProps.userStore.user || {};
        this.setState({...user});
    }

    handleChange = (evt, { name, value }) => {
        this.setState({ [name]: value });
    };

    render() {
        const {
            first_name,
            last_name,
            email,
            password,
            confirm_password,
            mobile_number,
            role,
            doctor_id,
            termsAgreed
        } = this.state;
        let roles = [];
        const { auth = {} } = this.props;
        let { user } = auth;
        user = user || {};
        switch (user.role) {
            case "admin":
                roles.push({ value: "admin", text: "Administrator" });
                roles.push({
                    value: "clinic_admin",
                    text: "Clinic Administrator"
                });
            case "clinic_admin":
                roles.push({ value: "doctor", text: "Doctor" });
            case "doctor":
                roles.push({ value: "patient", text: "Patient" });
        }

        return (
            <div>
                <Header>Create Clinic</Header>
                <Form>
                    <Form.Group widths="equal">
                        <Form.Field>
                            <label>First Name</label>
                            <Input
                                placeholder="First Name"
                                name="first_name"
                                value={first_name}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <Input
                                placeholder="Last Name"
                                name="last_name"
                                value={last_name}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Field>
                        <label>Email</label>
                        <Input
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Mobile Number</label>
                        <Input
                            placeholder="Mobile Number"
                            name="mobile_number"
                            value={mobile_number}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Role</label>
                        <Select
                            placeholder="Role"
                            name="role"
                            value={role}
                            onChange={this.handleChange}
                            options={roles}
                        />
                    </Form.Field>
                    {role == "patient" && (
                        <Form.Field className="animated fadeIn">
                            <label>Doctor</label>
                            <Input
                                placeholder="Doctor"
                                name="doctor_id"
                                value={doctor_id}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                    )}

                    <Form.Field>
                        <Checkbox
                            label="I agree to the Terms and Conditions"
                            checked={termsAgreed}
                            onChange={this.handleTermsChange}
                        />
                    </Form.Field>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        userStore: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getUser,
            createUser,
            updateUser,
            deleteUser
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserPage);
