import React, {Component, PropTypes} from 'react';
import {Button, Glyphicon, ButtonToolbar, ButtonGroup, Row, Col, Clearfix} from 'react-bootstrap';

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
                  <Glyphicon glyph="glyphicon glyphicon-plus" />
                </Button>
                <Button onClick={this.handleDelete} disabled={this.props.servers.length !== 0 ? false : true}>
                  <Glyphicon glyph="glyphicon glyphicon-minus" />
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
      let copy = Object.assign([], this.props.servers),
        firstServer = copy.shift();//ver si cual borrar

      if (firstServer.used !== false) {
        this.props.actionsApps.deleteApp(firstServer.used.id, this.props.servers);
      }
      this.props.actions.deleteServer(this.props.actionsApps);
    }
}

//check here
Server.propTypes = {
  actions: PropTypes.object.isRequired,
  servers: PropTypes.array.isRequired,
};
