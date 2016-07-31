import React, {Component, PropTypes} from 'react';

export class Cluster extends Component {
    constructor() {
        super();
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
      // console.log('render');
      // console.log(this.props.servers);
      return (
      <ul className="todo-list">
        {this.props.servers.map(server =>
          <li key={server.id}>
           <h1>
             {server.used.id} - <span>{server.used.short}</span>
           </h1>
         </li>
        )}
      </ul>
      );
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
