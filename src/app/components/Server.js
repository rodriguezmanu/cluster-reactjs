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
      this.props.actions.deleteServer();
    }
}

Server.propTypes = {
  actions: PropTypes.object.isRequired,
  servers: PropTypes.array.isRequired,
};
