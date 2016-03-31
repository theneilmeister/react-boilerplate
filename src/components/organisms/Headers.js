import React from 'react'
import { Link, browserHistory } from 'react-router'
import Modal from '../shared/Modal'

var css = {};


const Headers = React.createClass({

	landingPageClicked () {
		this.refs.modal.closeClicked();
		browserHistory.push('/');
	},

	page1Clicked () {
		this.refs.modal.closeClicked();
		browserHistory.push('/page1');
	},

	page2Clicked () {
		this.refs.modal.closeClicked();
		browserHistory.push('/page2');
	},

    render () {
        return (
        	<div>
	            <div className="headers no-select gradient-black">

					<h1 style={css.header}>React-App</h1>

					<Modal name="Settings-Modal" ref="modal">
	        			<div className="settings-icon"></div>
						<div>
							<h2>Settings</h2>
	        				<ul style={css.ul}>
	        					<li style={css.li} onClick={this.landingPageClicked}>Landing Page</li>
								<li style={css.li} onClick={this.page1Clicked}>Page 1</li>
								<li style={css.li} onClick={this.page2Clicked}>Page 2</li>
							</ul>
	        			</div>
	        		</Modal>

	        		<div className="headers-links">
	        			<Link to="/">Home Page</Link>
						<Link to="page1">Page 1</Link>
						<Link to="page2">Page 2</Link>
					</div>

				</div>
			</div>
        )
    }

})


css = {
	
	header: {
		padding: '3px 5px'
	},

	ul: {
		paddingBottom: '15px'
	},

	li: {
		cursor: 'pointer',
	    listStyle: 'none',
	    padding: '2%',
	    textAlign: 'center',
	    backgroundColor: '#969',
	    marginTop: '3%',
	    color: '#fff'
	}

};


export default Headers