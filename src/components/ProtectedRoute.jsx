import React from 'react';
import ChatStore from '../stores/ChatStore';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    let state = ChatStore.getState();
    let { component: Component, ...rest } = this.props;

    return (
      <Route {...rest} render={(props) => (
        state.user ? (
          <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
          )
      )} />
    );
  }
}

export default ProtectedRoute;