var React = require('react');
var $ = require('jquery');
var css = {};


var Modal = React.createClass({

    getDefaultProps () {
        return {
            name: 'modal-container'
        }
    },

    triggerClicked () {
        this.refs.wrapper.style.display = 'block';
    },

    closeClicked () {
        this.refs.wrapper.style.display = 'none';
    },

    render: function () {

        var TriggerContent  = this.props.children[0] ? this.props.children[0] : null;
        var ModalContent    = this.props.children[1] ? this.props.children[1] : null;

        return (
            <div>

                <div style={css.trigger} onClick={this.triggerClicked}>
                    {TriggerContent}
                </div>

                <div ref="wrapper" style={css.wrapper}>

                    <div style={css.foreground}>
                        {ModalContent}
                        <button onClick={this.closeClicked}>Close</button>
                    </div>

                </div>

            </div>
        )

    }

});


css = {

    trigger: {
        cursor: 'pointer'
    },

    wrapper: {
        display: 'none',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },

    foreground: {
        position: 'relative',
        width: '80%',
        minHeight: '100px',
        margin: '10% auto',
        marginTop: '80px',
        padding: '1%',
        backgroundColor: '#eee'
    }

};


module.exports = Modal;
