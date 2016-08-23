package com.scentbird.twittersearch

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Specification

@TestFor(UserService)
@Mock([User, UserRole, Role])
class UserServiceSpec extends Specification {

    User user

    def setup() {
        User.metaClass.encodePassword { -> }
        user = new User('user', '123').save()
        new Role('ROLE_USER').save()
    }

    void "test add role"() {
        when:
            service.addUserRole(user)
        then:
            user.authorities[0].authority == 'ROLE_USER'
    }
}
