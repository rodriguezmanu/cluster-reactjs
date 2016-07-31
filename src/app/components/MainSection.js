import React, {Component, PropTypes} from 'react';
import {Server} from './Server';
import {AppsItem} from './Apps';
import {Cluster} from './Cluster';
import { Button, Grid, Row, Col, Clearfix } from 'react-bootstrap';

export class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {actions, servers, apps, actionsApps} = this.props;
    return (
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={6} md={4} id="sidebar">
              <ul className="nav" id="sidebar-nav">
                <Server
                  servers={servers}
                  actions={actions}
                  actionsApps={actionsApps}
                />
                <hr/>
                <h2>Apps</h2>
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
    );
  }
}
//add here
MainSection.propTypes = {
  actions: PropTypes.object.isRequired
};
