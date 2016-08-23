package com.scentbird.twittersearch

import grails.plugin.springsecurity.annotation.Secured

@Secured(['permitAll'])
class TweetController {

    def tweetService

    def index() {
        [tweets: tweetService.search(params.query)]
    }
}
