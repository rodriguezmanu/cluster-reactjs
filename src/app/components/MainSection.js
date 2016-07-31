import React, {Component, PropTypes} from 'react';
import {Server} from './Server';
import {AppsItem} from './Apps';
import {Cluster} from './Cluster';
import { Button, Grid, Row, Col, Clearfix } from 'react-bootstrap';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    // this.handleClearCompleted = this.handleClearCompleted.bind(this);
    // this.handleShow = this.handleShow.bind(this);
    // this.handleCompleteAll = this.handleCompleteAll.bind(this);
  }

  // handleClearCompleted() {
  //   this.props.actions.clearCompleted();
  // }

  // handleCompleteAll() {
  //   this.props.actions.completeAll();
  // }

  // handleShow(filter) {
  //   this.setState({filter});
  // }

  // renderToggleAll(completedCount) {
  //   const {todos} = this.props;
  //   if (todos.length > 0) {
  //     return (
  //       <input
  //         className="toggle-all"
  //         type="checkbox"
  //         checked={completedCount === todos.length}
  //         onChange={this.handleCompleteAll}
  //         />
  //     );
  //   }
  // }

  // renderFooter(completedCount) {
  //   const activeCount = todos.length - completedCount;

  //   if (todos.length) {
  //     return (
  //       <Footer
  //         completedCount={completedCount}
  //         activeCount={activeCount}
  //         onClearCompleted={this.handleClearCompleted}
  //         onShow={this.handleShow}
  //         />
  //     );
  //   }
  // }

  render() {
    const {actions, servers, apps, actionsApps} = this.props;
    return (
      <section className="main">
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <Server
                servers={servers}
                actions={actions}
              />
              <ul className="todo-list">
                {this.props.apps.map(app =>
                  <AppsItem
                    key={app.id}
                    app={app}
                    actions={actionsApps}
                    servers={servers}
                   />
                )}
              </ul>
            </Col>
            <Col xs={12} md={8}>
            <Cluster
              servers={servers}
            />
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
//add here
MainSection.propTypes = {
  actions: PropTypes.object.isRequired
};

export default MainSection;
