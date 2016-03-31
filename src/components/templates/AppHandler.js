import React from 'react'
import {Link} from 'react-router'
import Headers from '../organisms/Headers'
import Footers from '../organisms/Footers'


const AppHandler = React.createClass({

    render () {
        return (
            <div>
            	<Headers />
            	<div className="body">
                	{this.props.children}
                </div>
                <Footers />
            </div>
        )
    }

})


export default AppHandler;
