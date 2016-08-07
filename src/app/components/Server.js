import React, {Component, PropTypes} from 'react';
import {Button, Glyphicon, ButtonToolbar, ButtonGroup, Row, Col} from 'react-bootstrap';
import * as utilities from '../util/util';

export class Server extends Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    return (
      <li>
        <Row className="show-grid">
          <Col xs={4} md={4}>
            <h4>Cluster</h4>
          </Col>
          <Col xs={8} md={8}>
            <ButtonToolbar>
              <ButtonGroup>
                <Button onClick={this.handleAdd}>
                  <Glyphicon glyph="glyphicon glyphicon-plus"/>
                </Button>
                <Button onClick={this.handleDelete} disabled={this.props.servers.length === 0}>
                  <Glyphicon glyph="glyphicon glyphicon-minus"/>
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
      </li>
    );
  }

  handleAdd() {
    this.props.actions.addServer();
  }

  handleDelete() {
    const lastServer = this.props.servers[this.props.servers.length - 1];
    const id = lastServer.used.id;

    if (typeof lastServer.used === 'object') {
      this.props.actionsApps.deleteApp(id, this.props.servers);
      this.props.actions.deleteServer();
      if (!utilities.checkAvail(this.props.servers)) {
        this.props.actionsApps.addApp(id, this.props.servers);
      }
    } else {
      this.props.actions.deleteServer();
    }
  }
}

Server.propTypes = {
  actions: PropTypes.object.isRequired,
  servers: PropTypes.array.isRequired,
  actionsApps: PropTypes.object.isRequired
};
