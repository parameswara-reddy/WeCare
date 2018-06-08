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

import { fetchClinics } from "../actions/clinics";

class ClinicListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.fetchClinics();
    }

    editClinic = (evt, {value}) => {
        this.props.history.push("/users/createUser?id=" + value.id);
    };
    deleteClinic = (evt, {value}) => {
        const clinic = value;
        if (
            confirm(
                "Are you sure you want to delete '" + clinic.name + "'?"
            )
        ) {
            console.log("Deleting " + clinic.name);
        }
    };
    render() {
        const { clinicsStore } = this.props;
        const { clinics, loadingClinics } = clinicsStore;
        return (
            <Segment>
                <Header>
                    <Icon name="hospital" /> List of Clinics
                </Header>
                <Dimmer active={loadingClinics}>
                    <Loader>Loadng Clinics</Loader>
                </Dimmer>
                {clinics.length > 0 ? (
                    <Card.Group centered doubling stackable itemsPerRow={4}>
                        {clinics.map(clinic => (
                            <Card key={clinic.id} className="animated zoomIn">
                                <Card.Content>
                                    <Card.Header>
                                        {clinic.name.toUpperCase()}
                                    </Card.Header>
                                    <Card.Meta>
                                        {clinic.contact_number}
                                    </Card.Meta>
                                    <Card.Description>
                                        {clinic.description}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className="ui two buttons">
                                        <Button basic color="green"
                                            value={clinic}
                                        onClick={this.editClinic}>
                                            <Icon name="cogs" />
                                            Edit
                                        </Button>
                                        <Button
                                            basic
                                            color="red"
                                            value={clinic}
                                            onClick={this.deleteClinic}
                                        >
                                            <Icon name="trash" />
                                            Delete
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        ))}
                    </Card.Group>
                ) : (
                    <div>No clinics registered</div>
                )}
            </Segment>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        clinicsStore: state.clinics
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchClinics
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ClinicListPage);
