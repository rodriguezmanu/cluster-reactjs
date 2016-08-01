import React, {Component, PropTypes} from 'react';
import {Button, Glyphicon, ButtonToolbar, ButtonGroup, Row, Col, Clearfix} from 'react-bootstrap';

export class AppsItem extends Component {
    constructor() {
      super();
      this.handleAdd = this.handleAdd.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.checkAvailCluster = this.checkAvailCluster.bind(this);
    }

    render() {
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
                    disabled={this.props.app.count !== 2 && this.checkAvailCluster()  ? false : true}
                  >
                    <Glyphicon glyph="glyphicon glyphicon-plus" />
                  </Button>
                    <Button onClick={this.handleDelete} disabled={this.props.app.count !== 0 ? false : true}>
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
      //faltan comprobaciones y ngif para mostrar o no el boton html
      this.props.actions.addApp(this.props.app.id, this.props.servers);
    }

    handleDelete() {
      //faltan comprobaciones y ngif para mostrar o no el boton en el html
        this.props.actions.deleteApp(this.props.app.id, this.props.servers);
    }

    checkAvailCluster() {
      const servers = this.props.servers;

      for (let i = 0; i < servers.length; i++) {//ver de cambiar por un for mas pro
        if (servers[i].used === false) {
          return true;
        }
      }
      return false;
    }
}
//check
AppsItem.propTypes = {
  actions: PropTypes.object.isRequired,
  servers: PropTypes.array.isRequired,
};
