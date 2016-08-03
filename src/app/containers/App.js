import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {MainSection} from '../components/MainSection';
import * as ServerActions from '../actions/serverActions';
import * as AppsActions from '../actions/appsActions';

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

App.propTypes = {
  servers: PropTypes.array.isRequired,
  apps: PropTypes.array.isRequired,
  actionsServers: PropTypes.object.isRequired,
  actionsApps: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
