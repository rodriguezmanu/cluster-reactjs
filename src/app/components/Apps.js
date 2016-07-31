import React, {Component, PropTypes} from 'react';

export class AppsItem extends Component {
    constructor() {
      super();
      this.handleAdd = this.handleAdd.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.checkAvailCluster = this.checkAvailCluster.bind(this);
    }

    render() {
      return (
        <li>
            <h4>{this.props.app.title}</h4>
            <button
              onClick={this.handleAdd}
              disabled={this.props.app.count !== 2 && this.checkAvailCluster()  ? false : true}
            >
              Add
            </button>
            <button onClick={this.handleDelete} disabled={this.props.app.count !== 0 ? false : true}>
                Destroy
            </button>
        </li>
      );
    }

    handleAdd() {
      //faltan comprobaciones y ngif para mostrar o no el boton html
      this.props.actions.addApp(this.props.app.id, this.props.servers);
    }

    handleDelete() {
      //faltan comprobaciones y ngif para mostrar o no el boton en el html
        this.props.actions.deleteApp(this.props.app.id, this.props.servers);
    }

    checkAvailCluster() {
      const servers = this.props.servers;

      for (let i = 0; i < servers.length; i++) {//ver de cambiar por un for mas pro
        if (servers[i].used === false) {
          return true;
        }
      }
      return false;
    }
}

// AppsItem.propTypes = {
//   actions: PropTypes.object.isRequired,
//   servers: PropTypes.array.isRequired,
// };
