import React, {Component, PropTypes} from 'react';

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
            <li key={servers[i].id}>
              <h1>
                <span>{servers[i].used.short}</span> - <span>{servers[i].used.date}</span>
              </h1>
            </li>;
            html.push(htmlServers);
        } else {
          let htmlEmpty =
            <li key={servers[i].id}>
              <h1>
                <span>empty</span>
              </h1>
            </li>;
            html.push(htmlEmpty);
        }
      }
      return <ul className="list">{html}</ul>
    }

    handleAdd() {
      this.props.actions.addServer();
    }

    handleDelete() {
      this.props.actions.deleteServer();
    }
}

// Server.propTypes = {
//   actions: PropTypes.object.isRequired,
//   servers: PropTypes.array.isRequired,
// };
