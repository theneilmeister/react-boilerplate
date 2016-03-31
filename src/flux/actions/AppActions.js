import AppDispatcher from '../dispatcher/AppDispatcher'

import AppConstants from '../constants/AppConstants'
import AppUtils from '../utils/AppUtils'


var AppActions = {

    init (context) {

        // var query = querystring.parse(url.parse(location.href).query);
        // var prospectId = context.router.getCurrentParams().prospectId;

        // AppDispatcher.handleServerAction({
        //     actionType: FrameworkConstants.FETCH,
        //     storeId: 'ProspectStore'
        // });

        // if (prospectId) {
        //     AppActions.initFromApi(prospectId);
        // } else {
        //     AppActions.initFromQuoteWare(query.quoteId, query.imageUrl);
        // }

    },

    setTotalPlayers (totalPlayers) {

        AppDispatcher.handleViewAction({
            actionType: AppConstants.SET_TOTAL_PLAYERS,
            storeId: 'AppStore',
            players: totalPlayers
        });


        // console.debug('context: ', context);
    }

};


export default AppActions