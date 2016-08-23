import request from 'reqwest';
import {TWEET_URL} from '../constants/TweetConstants';
import TweetActions from '../actions/TweetActions';
import LoginStore from '../stores/LoginStore.js';

class TweetService {

    search(query) {
        request({
            url: TWEET_URL + '?query=' + query,
            method: 'GET',
            crossOrigin: true,
            headers: {
                'Authorization': 'Bearer ' + LoginStore.jwt
            }
        })
            .then(function(response) {
                TweetActions.gotTweets(response);
            });
    }

}

export default new TweetService()