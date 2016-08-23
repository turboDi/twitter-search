package com.scentbird.twittersearch

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*

@Secured(['permitAll'])
class UserController extends RestfulController<User> {

    def userService

    UserController() {
        super(User)
    }

    @Override
    protected User saveResource(User resource) {
        super.saveResource(resource)
        userService.addUserRole(resource)
        resource
    }
}
