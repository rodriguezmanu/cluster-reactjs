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
            <button onClick={this.handleAdd}>
                Add
            </button>
            <br/>
            <button onClick={this.handleDelete}>
                Destroy
            </button>
        </div>
      );
    }

    handleAdd() {
      console.log('handleAdd');
      this.props.actions.addServer();
    }

    handleDelete() {
        console.log('handleDelete');
        this.props.actions.deleteServer();
    }
}

Server.propTypes = {
  actions: PropTypes.object.isRequired,
  servers: PropTypes.array.isRequired,
};
