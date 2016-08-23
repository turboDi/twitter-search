package com.scentbird.twittersearch

class UrlMappings {

    static mappings = {
        "/"(redirect:"/index.html")
        "/api/users"(resources: 'user', includes: 'save')
        "/api/tweets"(controller: 'tweet', action: 'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
