import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../src/store.js';
import withSession from '../src/lib/with-session';
import Login from '../src/components/Login';
import App from '../src/containers/App';

const Restricted = (Component) => {
  const checkAuth = (props) => {
    return props.isLoggedIn ? <Component {...props} /> : <Login/>
  }

  return withSession(checkAuth);
}

const Index = Restricted(({session}) => (
  <div>
    <App session={session} />
  </div>
  )
)

Index.propTypes = {
  session: PropTypes.object.isRequired
};

export default withRedux(initStore)(Index);