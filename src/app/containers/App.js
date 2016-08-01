import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {MainSection} from '../components/MainSection';
import * as ServerActions from '../actions/ServerActions';
import * as AppsActions from '../actions/AppsActions';

class App extends Component {
  render() {
    const {servers, actionsServers, apps, actionsApps} = this.props;
    console.log(servers, apps);
    return (
      <div>
        <MainSection
          servers={servers}
          actions={actionsServers}
          apps={apps}
          actionsApps={actionsApps}
          />
      </div>
    );
  }
}

// App.propTypes = {
//   servers: PropTypes.array.isRequired,
//   apps: PropTypes.array.isRequired,
//   actionsServers: PropTypes.object.isRequired,
//   actionsApps: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
  return {
    servers: state.servers,
    apps: state.apps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionsServers: bindActionCreators(ServerActions, dispatch),
    actionsApps: bindActionCreators(AppsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
