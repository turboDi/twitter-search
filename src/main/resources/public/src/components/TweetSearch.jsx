import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';
import TweetStore from '../stores/TweetStore.js';
import TweetService from '../services/TweetService.js';

export default AuthenticatedComponent(class TweetSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            tweets: TweetStore.tweets
        };
        this.onChangeTweets = this.onChangeTweets.bind(this);
    }

    componentDidMount() {
        TweetStore.addChangeListener(this.onChangeTweets);
    }

    componentWillUnmount() {
        TweetStore.removeChangeListener(this.onChangeTweets);
    }

    onChangeTweets() {
        this.setState({tweets: TweetStore.tweets});
    }

    onChangeQuery(newValue) {
        this.setState({query: newValue});
    }

    search() {
        TweetService.search(this.state.query);
    }

    render() {
        var queryValueLink = {
            value: this.state.query,
            requestChange: this.onChangeQuery.bind(this)
        };
        return (
            <div>
                <div className="row">
                    <div className="input-group">
                        <input type="text" valueLink={queryValueLink} className="form-control" placeholder="Search for..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.search.bind(this)}>Go!</button>
                        </span>
                    </div>
                </div>
                <br/>
                <ul>
                {this.searchResults}
                </ul>
            </div>
        );
    }

    get searchResults() {
        var tweets = this.state.tweets;
        if (!tweets.length) {
            return <p className="text-center">no results</p>
        } else {
            return tweets.map(
                function(tweet, i) {
                    return <li key={i}>
                        <h5><b>{ tweet.user }</b> on { new Date(tweet.date).toString() }</h5>
                        <p>{ tweet.text }</p>
                    </li>;

                });
        }
    }
});
