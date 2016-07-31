import React, {Component, PropTypes} from 'react';

export class Cluster extends Component {
    constructor() {
        super();
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
      //need to check if is used server or not
        let element =
        <ul className="todo-list">
          {this.props.servers.map(server =>
            <li key={server.id}>
              <h1>
                <span>{server.used.short}</span> - <span>{server.used.date}</span>
               </h1>
           </li>
          )}
        </ul>;
        return element;
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
