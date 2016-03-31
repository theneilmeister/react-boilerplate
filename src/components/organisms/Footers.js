import React from 'react'
import {Link} from 'react-router'


const Footers = React.createClass({

    render () {
        return (
            <div className="footers no-selec gradient-black">
				<div className="mobile-content-only">
                    
                    <Link to="page1" className="button btn-fixtures gradient-black">
                        Page 1</Link>
                    
                    <Link to="page2" className="button btn-standings gradient-black">
                        Page 2</Link>

				</div>
            </div>
        )
    }

})


export default Footers