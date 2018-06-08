import React, { Component } from "react";
import { Header, Form, TextArea, Select, Checkbox, Button, Input } from "semantic-ui-react";

class CreateClinicPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            contact_number: "",
            admin_id: "",
            termsAgreed: false
        };
    }

    handleNameChange = (evt, {value}) => {
        this.setState({name:value});
    }
    handleDescriptionChange = (evt, {value}) => {
        this.setState({description:value});
    }
    handleContactNumberChange = (evt, {value}) => {
        this.setState({contact_number:value});
    }
    handleAdminChange = (evt, {value}) => {
        this.setState({admin_id:value});
    }
    handleTermsChange = (evt, {value}) => {
        this.setState({termsAgreed:value});
    }

    render() {
        const {name, description, contact_number, admin_id,termsAgreed} =  this.state;
        return (
            <div>
                <Header>Create Clinic</Header>
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <Input placeholder="Name" value={name} onChange={this.handleNameChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <TextArea placeholder="Description" value={description} onChange={this.handleContactNumberChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Contact Number</label>
                        <Input placeholder="Contact Number" value={contact_number} onChange={this.handleContactNumberChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Administrator</label>
                        <Select  placeholder="Administrator" options={[{text: "Param", value: 1}]} value={admin_id} onChange={this.handleAdminChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label="I agree to the Terms and Conditions" value={termsAgreed} onChange={this.handleTermsChange}/>
                    </Form.Field>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default CreateClinicPage;
