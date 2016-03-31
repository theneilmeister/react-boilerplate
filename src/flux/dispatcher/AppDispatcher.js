// var Dispatcher = require('flux').Dispatcher;
import {Dispatcher} from 'flux'
import assign from 'object-assign'


var AppDispatcher = assign(new Dispatcher(), {

    handleServerAction (action) {
        this.dispatch({
            source: 'SERVER_ACTION',
            action: action
        });
    },

    handleViewAction (action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }

});


export default AppDispatcher