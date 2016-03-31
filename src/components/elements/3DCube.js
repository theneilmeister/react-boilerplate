import React from 'react'
var styles = {};


const Cube3D = React.createClass({

    propTypes: {
        cubeIndex: React.PropTypes.number,
        positionStyles: React.PropTypes.object,
        onSelect: React.PropTypes.func,
        player: React.PropTypes.number,
        state: React.PropTypes.any        // ie, "invalid" centre cube slice 2
    },

    getDefaultProps () {
        return {
            cubeIndex: 1,
            positionStyles: {
                position: 'absolute',
                top: '0%',
                left: '0%'
            },
            onSelect: function () {return true;},
            player: 1,
            state: ''
        }
    },

    getInitialState () {
        return {
            status: this.props.state ? this.props.state : null
        }
    },

    handleClick () {

        if(this.state.status) {
            return;
        }

        this.setState({
            status: this.props.player
        });

        this.props.onSelect(this.props.cubeIndex, this.props.player);
        
    },

    handleMouseOver () {

        var boxStyles = styles.default;

        if(this.state.status) {
            return;
        }

        switch(this.props.player) {
            case 1: boxStyles = styles.player1_onHover; break;
            case 2: boxStyles = styles.player2_onHover; break;
            case 3: boxStyles = styles.player3_onHover; break;
        }

        this.refs.front.style.backgroundColor = boxStyles.backgroundColor;
        this.refs.right.style.backgroundColor = boxStyles.backgroundColor;
        this.refs.back.style.backgroundColor = boxStyles.backgroundColor;
        this.refs.left.style.backgroundColor = boxStyles.backgroundColor;
        this.refs.top.style.backgroundColor = boxStyles.backgroundColor;
        this.refs.bottom.style.backgroundColor = boxStyles.backgroundColor;

    },

    handleMouseOut () {

        var boxStyles = styles.default;

        if(this.state.status) {
            return;
        }

        switch(this.state.status) {
            case 1: boxStyles = styles.player1; break;
            case 2: boxStyles = styles.player2; break;
            case 3: boxStyles = styles.player3; break;
        }

        this.refs.front.style.backgroundColor = boxStyles.backgroundColor;
        this.refs.right.style.backgroundColor = boxStyles.backgroundColor;
        this.refs.back.style.backgroundColor = boxStyles.backgroundColor;
        this.refs.left.style.backgroundColor = boxStyles.backgroundColor;
        this.refs.top.style.backgroundColor = boxStyles.backgroundColor;
        this.refs.bottom.style.backgroundColor = boxStyles.backgroundColor;

    },

    render () {

        // console.debug('cube inx:', this.props.cubeIndex, this.state.status);

        var boxStyles = styles.default;

        switch(this.state.status) {
            case "invalid": boxStyles = styles.invalid; break;
            case 1: boxStyles = styles.player1; break;
            case 2: boxStyles = styles.player2; break;
            case 3: boxStyles = styles.player3; break;
        }

        return (
            <section className="container" 
                        style={this.props.positionStyles}
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut}>


                <div id="cube" className="starting-position">


                    <figure className="front"
                            ref="front" 
                            onClick={this.handleClick}
                            style={boxStyles}>

                        <div style={styles.frontCentre}>
                            {this.props.children}
                        </div>

                    </figure>

                    <figure className="left" 
                            style={boxStyles}
                            ref="left" />

                    <figure className="back" 
                            style={boxStyles}
                            ref="back" />

                    <figure className="right" 
                            style={boxStyles} 
                            ref="right" />

                    <figure className="top" 
                            style={boxStyles}
                            ref="top" />

                    <figure className="bottom" 
                            style={boxStyles}
                            ref="bottom" />

                </div>
            </section>
        );

    }
});


styles = {

    frontCentre: {
        paddingTop: '15px',
        fontSize: '18px',
        fontWeight: 'bold'
    },

    invalid: {
        backgroundColor: 'gray'
    },

    default: {
        backgroundColor: ''
    },

    player1: {
        backgroundColor: 'green'
    },

    player1_onHover: {
        backgroundColor: 'lightgreen'  
    },

    player2: {
        backgroundColor: 'blue'
    },

    player2_onHover: {
        backgroundColor: 'lightblue'
    },

    player3: {
        backgroundColor: 'lightpink'
    },

    player3_onHover: {
        backgroundColor: 'pink'
    }


}


export default Cube3D