import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/index';
import * as ServerActions from '../actions/ServerActions';
import * as AppsActions from '../actions/AppsActions';

class App extends Component {
  render() {
    const {todos, actions, servers, actionsServers, apps, actionsApps} = this.props;
    console.log(servers, apps);
    return (
      <div>
        <Header
          addTodo={actions.addTodo}
          />
        <MainSection
          todos={todos}
          servers={servers}
          actions={actionsServers}
          apps={apps}
          actionsApps={actionsApps}
          />
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  servers: PropTypes.array.isRequired,
  apps: PropTypes.array.isRequired,
  actionsServers: PropTypes.object.isRequired,
  actionsApps: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    servers: state.servers,
    apps: state.apps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
    actionsServers: bindActionCreators(ServerActions, dispatch),
    actionsApps: bindActionCreators(AppsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
