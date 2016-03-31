import AppDispatcher from '../dispatcher/AppDispatcher'
import {EventEmitter} from 'events';
import _ from 'lodash'
import assign from 'object-assign'
import AppConstants from '../constants/AppConstants'


var defaultValues = {
    state: 1,
    activePlayer: 1,
    totalPlayers: 2
}


class AppStore extends EventEmitter {

    constructor() {
        
        super();
        
        this.storeId = 'AppStore';
        this.errors = {};
        this.loading = false;
        
        this.data = {};
        
        AppDispatcher.register(this._handleDispatchedEvent.bind(this));

    }

    initialize() {
        this.data = defaultValues || {};
    }

    getState() {
        return {
            data: this.data,
            errors: this.errors,
            loading: this.loading
        }
    }

    getContext() {
        return { storeId: this.storeId }
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    emitChange() {
        this.emit('change');
    }

    _handleDispatchedEvent(payload) {

        var action = payload.action;


        if(action.storeId === this.storeId) {

            console.debug('AppStore', action);

            switch (action.actionType) {

                case AppConstants.SET_TOTAL_PLAYERS:

                    this.errors = {};
                    this.loading = false;
                    this.data.totalPlayers = action.players;

                    this.emitChange();
                    break;

                // case AppConstants.FETCH:
                //     this.errors = {};
                //     this.loading = true;
                //     this.emitChange();
                //     break;

                // case AppConstants.FETCH_SUCCESS:
                //     this.errors = {};
                //     this.loading = false;

                //     if (this.onFetchSuccess) {
                //         this.onFetchSuccess(action.data);
                //     } else {
                //         this.data = action.data;
                //     }

                //     this.emitChange();
                //     break;

                // case AppConstants.FETCH_ERROR:
                //     this.errors.fetch = true;
                //     this.loading = false;
                //     this.emitChange();
                //     break;

            }

        }

        if (this.onAction) {
            this.onAction(action);
        }
    }
}


function createStore(template) {
    var store = new AppStore();
    store = assign(store, template);
    store.initialize();
    return store;
}


// module.exports = createStore;

var Store = createStore();
export default Store