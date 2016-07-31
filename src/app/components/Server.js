import React, {Component, PropTypes} from 'react';

export class Server extends Component {
    constructor() {
        super();
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
      return (
        <div>
            <span>Servers - </span>
            <button onClick={this.handleAdd}>
                Add
            </button>
            -----
            <button onClick={this.handleDelete} disabled={this.props.servers.length !== 0 ? false : true}>
                Destroy
            </button>
        </div>
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

//check
Server.propTypes = {
  actions: PropTypes.object.isRequired,
  servers: PropTypes.array.isRequired,
};
