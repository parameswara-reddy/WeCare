import React, { Component } from "react";
import ReactDOM from "react-dom";
import IndexPage from './pages/IndexPage';
import configureStore from "./configureStore";
import { Provider } from "react-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const store = configureStore();

if (document.getElementById("example")) {
    ReactDOM.render(
        <Provider store={store}>
            <IndexPage />
        </Provider>,
        document.getElementById("example")
    );
}