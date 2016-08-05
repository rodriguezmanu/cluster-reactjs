import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap';

export class Cluster extends Component {
  render() {
    let html = [];
    const servers = this.props.servers;
    const n = servers.length;

    for (let i = 0; i < n; i++) {
      if (servers[i].used !== false) {
        const htmlServers =
          <Col xs={6} md={6} lg={3} key={servers[i].id} className="text-center">
            <div className={servers[i].used.title + ' thumbnail animated fadeIn'}>
              <h2>{servers[i].used.short}</h2>
              <h4>{servers[i].used.title}</h4>
              <p>{servers[i].used.date}</p>
            </div>
          </Col>;
        html.push(htmlServers);
      } else {
        const htmlEmpty =
          <Col xs={6} md={6} lg={3} key={servers[i].id}>
            <div className="thumbnail bounceInRight animated">
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
}

Cluster.propTypes = {
  servers: PropTypes.array.isRequired
};
