import React, {Component, PropTypes} from 'react';
import {Button, Glyphicon, ButtonToolbar, ButtonGroup, Row, Col} from 'react-bootstrap';
import * as utilities from '../util/util';

export class AppsItem extends Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    let isDisable = this.props.app.count === 2 || utilities.checkAvailServers(this.props.servers);

    return (
      <li>
        <Row className="show-grid">
          <Col xs={4} md={4}>
            <h4>{this.props.app.title}</h4>
          </Col>
          <Col xs={8} md={8}>
            <ButtonToolbar>
              <ButtonGroup>
                <Button
                  onClick={this.handleAdd}
                  disabled={isDisable}
                  >
                  <Glyphicon glyph="glyphicon glyphicon-plus"/>
                </Button>
                <Button onClick={this.handleDelete} disabled={this.props.app.count === 0}>
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
    this.props.actions.addApp(this.props.app.id, this.props.servers);
    this.props.actions.moveApp(this.props.app.id, this.props.servers);
  }

  handleDelete() {
    this.props.actions.deleteApp(this.props.app.id, this.props.servers);
  }
}

AppsItem.propTypes = {
  actions: PropTypes.object.isRequired,
  servers: PropTypes.array.isRequired,
  app: PropTypes.object.isRequired
};
