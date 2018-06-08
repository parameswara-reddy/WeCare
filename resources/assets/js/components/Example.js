import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Message} from 'semantic-ui-react';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                <Message>
                                    <Message.Header>
                                        Changes in Service
                                    </Message.Header>
                                    <p>
                                    We updated our privacy policy here to better service our customers. We recommend reviewing the changes.
                                    </p>
                                </Message>
                                I'm an example component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
