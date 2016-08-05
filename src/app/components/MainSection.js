import React, {Component, PropTypes} from 'react';
import {Server} from './Server';
import {AppsItem} from './Apps';
import {Cluster} from './Cluster';
import {Grid, Row, Col} from 'react-bootstrap';

export class MainSection extends Component {

  render() {
    const {actions, servers, apps, actionsApps} = this.props;
    return (
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col xs={12} md={2} id="sidebar">
            <h2>Servers</h2>
            <ul className="nav" id="sidebar-nav">
              <Server
                servers={servers}
                actions={actions}
                actionsApps={actionsApps}
                />
              <h2>Apps</h2>
              {apps.map(app =>
                <AppsItem
                  key={app.id}
                  app={app}
                  actions={actionsApps}
                  servers={servers}
                  />
              )}
            </ul>
          </Col>
          <Col xs={12} md={10} className="cluster">
            <Cluster
              servers={servers}
              />
          </Col>
        </Row>
      </Grid>
    );
  }
}

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
  actionsApps: PropTypes.object.isRequired,
  servers: PropTypes.array.isRequired,
  apps: PropTypes.array.isRequired
};
