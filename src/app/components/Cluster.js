import React, {Component, PropTypes} from 'react';
import {Row, Col, Clearfix} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class Cluster extends Component {
    constructor() {
      super();
    }

    render() {
      let html = [];
      const servers = this.props.servers,
        n = servers.length;

      for (let i = 0; i < n; i++) {
        if (servers[i].used !== false) {
          let htmlServers =
            <Col xs={3} md={3} lg={3} key={servers[i].id}  className="text-center">
              <ReactCSSTransitionGroup transitionName="animated-server" transitionAppear={true}
                transitionEnterTimeout={3000} transitionLeaveTimeout={3000}>
                <div className={servers[i].used.title + ' thumbnail'}>
                  <h2>{servers[i].used.short}</h2>
                  <h4>{servers[i].used.title}</h4>
                  <p>{servers[i].used.date}</p>
                </div>
              </ReactCSSTransitionGroup>
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
}

Cluster.propTypes = {
  servers: PropTypes.array.isRequired,
};
