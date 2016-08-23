import {TWEET_GET} from '../constants/TweetConstants';
import {LOGOUT_USER} from '../constants/LoginConstants';
import BaseStore from './BaseStore';

class TweetStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._tweets = [];
    }

    _registerToActions(action) {
        switch(action.actionType) {
            case TWEET_GET:
                this._tweets = action.tweets;
                this.emitChange();
                break;
            case LOGOUT_USER:
                this._tweets = [];
                this.emitChange();
                break;
            default:
                break;
        }
    }

    get tweets() {
        return this._tweets;
    }
}

export default new TweetStore();