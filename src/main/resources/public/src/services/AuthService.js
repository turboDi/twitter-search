import request from 'reqwest';
import when from 'when';
import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';

class AuthService {

    login(username, password) {
        return when(request({
            url: LOGIN_URL,
            method: 'POST',
            crossOrigin: true,
            type: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                username: username,
                password: password
            })
        }))
            .then(function(response) {
                var jwt = response.access_token;
                LoginActions.loginUser(jwt);
                return true;
            });
    }

    logout() {
        LoginActions.logoutUser();
    }

    signup(username, password) {
        return when(request({
            url: SIGNUP_URL,
            method: 'POST',
            crossOrigin: true,
            type: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                username: username,
                password: password
            })
        }))
            .then(this.login.bind(this, username, password));
    }
}

export default new AuthService()
