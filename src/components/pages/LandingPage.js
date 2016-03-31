import React from 'react'
import {Link} from 'react-router'
import AppActions from '../../flux/actions/AppActions'
import AppStore from '../../flux/stores/AppStore'

var styles = {}


const LandingPage = React.createClass({

	getInitialState () {
		return {
			AppStore: {}
		}
	},

	componentWillMount () {

		setTimeout(function() {
			
            AppActions.init(AppStore.getContext());

            this.setState({
            	AppStore: AppStore.getState()
            });
            
        }.bind(this), 0);

	},

	componentDidMount () {
		AppStore.addChangeListener(this._onStoreChange);
	},

    componentWillUnmount () {
        AppStore.removeChangeListener(this._onStoreChange);
    },

    _onStoreChange () {
        this.setState({
        	AppStore: AppStore.getState()
        }, function () {

        	console.debug('LandingPage app-store updated this state:', this.state);
        	
        });
    },

	render () {
		
		console.debug('LandingPage re-rendered:', this.state);
		
		return (
			<div style={styles.container}>

				<h1>React App Demo</h1>
				<h3>(Landing Page)</h3>

				<br /><br />

				<p>
				</p>
			
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


export default LandingPage