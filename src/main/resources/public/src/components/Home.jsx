import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'
import TweetSearch from './TweetSearch'

export default AuthenticatedComponent(class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi {this.props.user ? this.props.user.sub : ''}, checkout latest tweets</h1>
                <TweetSearch/>
            </div>
        );
    }
});
