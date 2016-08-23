package com.scentbird.twittersearch

import grails.test.mixin.TestFor
import spock.lang.Specification

@TestFor(TweetController)
class TweetControllerSpec extends Specification {

    def setup() {
        controller.tweetService = [ search: {q -> [text: q] } ]
    }

    void "test search tweets"() {
        when:
            params.query = '123'
        then:
            controller.index() == [tweets: [text: '123']]
    }
}
