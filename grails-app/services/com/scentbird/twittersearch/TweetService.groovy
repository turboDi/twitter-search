package com.scentbird.twittersearch

import twitter4j.Query

class TweetService {

    def twitterFactory

    def search(String query) {
        query ? twitterFactory.instance.search(new Query(query)).getTweets() : []
    }
}
