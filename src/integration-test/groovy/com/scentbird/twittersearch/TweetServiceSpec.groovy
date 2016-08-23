package com.scentbird.twittersearch

import grails.test.mixin.integration.Integration
import org.springframework.beans.factory.annotation.Autowired
import spock.lang.Specification

@Integration
class TweetServiceSpec extends Specification {

    @Autowired
    TweetService tweetService

    void "test search twitter"() {
        expect:
            !tweetService.search('summer').isEmpty()
    }
}
