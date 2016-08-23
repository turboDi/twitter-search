import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {TWEET_GET} from '../constants/TweetConstants.js';

export default {
    gotTweets: (tweets) => {
        AppDispatcher.dispatch({
            actionType: TWEET_GET,
            tweets: tweets
        })
    }
}