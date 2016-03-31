import React from 'react'
import {Link} from 'react-router'

var styles = {}


const Page1 = React.createClass({

	render () {
		
		console.debug('Page 1 re-rendered:', this.state);
		
		return (
			<div style={styles.container}>

				<h1>React App Demo</h1>
				<h3>(Page 1)</h3>
				<br /><br />
				
			</div>
		)
	}

})


styles = {

	container: {
		width: '100%',
		height: '100%',
		textAlign: 'center'
	},

	button: {
        padding: '8px 16px 8px 16px',
        marginRight: '8px'
    }

}


export default Page1