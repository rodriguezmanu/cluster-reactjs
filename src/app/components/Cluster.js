import React, {Component, PropTypes} from 'react';
import {Row, Col, Clearfix} from 'react-bootstrap';

export class Cluster extends Component {
    constructor() {
        super();
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
      let html = [];
      const servers = this.props.servers,
        n = servers.length;

      for (let i = 0; i < n; i++) {
        if (servers[i].used !== false) {
          let htmlServers =
          <Col xs={3} md={3} lg={3} key={servers[i].id}  className="text-center">
            <div className={servers[i].used.title + ' thumbnail'}>
              <h2>{servers[i].used.short}</h2>
              <h4>{servers[i].used.title}</h4>
              <p>{servers[i].used.date}</p>
            </div>
          </Col>;
            html.push(htmlServers);
        } else {
          let htmlEmpty =
          <Col xs={3} md={3} lg={3} key={servers[i].id}>
            <div className="thumbnail">
            </div>
          </Col>;
            html.push(htmlEmpty);
        }
      }
      return (
        <Row>
          <h1>SERVER CANVAS</h1>
            {html}
        </Row>
      );
    }

    handleAdd() {
      this.props.actions.addServer();
    }

    handleDelete() {
      this.props.actions.deleteServer();
    }
}
//check here
// Cluster.propTypes = {
//   actions: PropTypes.object.isRequired,
//   servers: PropTypes.array.isRequired,
// };
