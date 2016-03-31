// import React from 'react/addons'
// var React = require('react').addons;
var React = require('react');
import _ from 'lodash'
import AppActions from '../actions/AppActions'


const LinkedStoreMixin = function (store) {

    return {

        // contextTypes: {
        //     router: React.PropTypes.func
        // },

        componentWillMount: function() {
            setTimeout(function() {
                AppActions.init(store.getContext());
            }.bind(this), 0);
        },

        getInitialState: function () {
            return store.getState();
        },

        valueLink: function(fieldName, errorPath) {
            return {
                hasChanged: false,
                name: fieldName,
                value: _.get(this.state.formData, fieldName),
                requestChange: this._handleChange(fieldName),
                errorMessage: this._getFieldErrorMessage(errorPath ? errorPath : fieldName),
                formSubmitted: this.state.formSubmitted
            };
        },

        _handleChange: function(fieldName) {
            return function(value) {
                AppActions.updateValue(fieldName, value, store.getContext());
            };
        },

        _getFieldErrorMessage: function(fieldName) {

            var errorKey = this.state.validationErrors[fieldName];
            var message;

            if (!errorKey) {
                return undefined;
            }

            var messageKey = fieldName.replace(/\.[0-9]+\./, '.');
            message = _.get(this.validationMessages, messageKey);

            if (typeof message === 'string' ) {
                return message;
            }

            if (typeof message === 'object') {

                if (errorKey in message) {
                    return message[errorKey];
                }

                if (errorKey === 'empty' && 'required' in message) {
                    return message.required;
                }
            }

            return 'Error: ' + errorKey;
        },

        componentDidMount: function () {
            store.addChangeListener(this._onStoreChange);
        },

        componentWillUnmount: function() {
            store.removeChangeListener(this._onStoreChange);
        },

        _onStoreChange: function () {
            this.setState(store.getState());
        },

        validateAndSubmit: function(event) {
            event.preventDefault();

            this.setState({ formSubmitted: true });

            if (_.keys(this.state.validationErrors).length === 0) {
                this.onSubmitSuccess();
            } else {
                if (this.onSubmitError) {
                    this.onSubmitError();
                }
            }
        },

        addItemToCollection: function(path) {
            return function() {
                AppActions.addItemToCollection(path, store.getContext());
            }
        },

        removeItemFromCollection: function(path, index) {
            return function() {
                AppActions.removeItemFromCollection(path, index, store.getContext());
            }
        }
    };
};




// module.exports = LinkedStoreMixin;
export default LinkedStoreMixin;

