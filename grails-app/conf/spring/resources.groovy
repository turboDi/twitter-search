import twitter4j.TwitterFactory
import twitter4j.conf.ConfigurationBuilder

// Place your Spring DSL code here
beans = {

    twitterConfigBuilder(ConfigurationBuilder) {
        oAuthConsumerKey = 'zxOJCqTcbAxVmXuVnsR4ZV4E4'
        oAuthConsumerSecret = 'KTWsg8AqCqNH1EeNWoICnyJDDtwQVdvKzomPK14K8VU3E9MkLv'
        oAuthAccessToken = '3403070164-SizNn8p0cjso12xUGVF6t20rsv72FqfBaySwFm6'
        oAuthAccessTokenSecret = 'bmjuQotYjLf5s6tHKGCWvqTZ3dJLdD9r7A9uz7kgXqKe9'
    }

    twitterConfig(twitterConfigBuilder: 'build')

    twitterFactory(TwitterFactory, ref('twitterConfig'))
}
