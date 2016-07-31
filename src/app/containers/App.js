import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/index';
import * as ServerActions from '../actions/ServerActions';

class App extends Component {
  render() {
    const {todos, actions, servers, actionsServers} = this.props;
    console.log(servers);
    return (
      <div>
        <Header
          addTodo={actions.addTodo}
          />
        <MainSection
          todos={todos}
          servers={servers}
          actions={actionsServers}
          />
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  servers: PropTypes.array.isRequired,
  actionsServers: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    servers: state.servers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
    actionsServers: bindActionCreators(ServerActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
