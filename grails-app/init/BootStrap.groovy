import com.scentbird.twittersearch.Role
import com.scentbird.twittersearch.User
import com.scentbird.twittersearch.UserRole

class BootStrap {

    def init = { servletContext ->
        User user = new User('user', '123').save()
        Role role = new Role('ROLE_USER').save()
        UserRole.create(user, role, true)
    }
    def destroy = {
    }
}
