package com.scentbird.twittersearch

import grails.transaction.Transactional

@Transactional
class UserService {

    def addUserRole(User user) {
        UserRole.create(user, Role.findByAuthority('ROLE_USER'))
    }
}
