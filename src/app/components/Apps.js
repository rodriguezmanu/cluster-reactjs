import React, {Component, PropTypes} from 'react';

export class AppsItem extends Component {
    constructor() {
      super();
      this.handleAdd = this.handleAdd.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
      return (
        <div>
            <span>{this.props.app.title} - </span>
            <button onClick={this.handleAdd} disabled={this.props.app.count !== 2 ? false : true}>
                Add
            </button>
            ---
            <button onClick={this.handleDelete} disabled={this.props.app.count !== 0 ? false : true}>
                Destroy
            </button>
        </div>
      );
    }

    handleAdd() {
      //faltan comprobaciones y ngif para mostrar o no el boton html
      this.props.actions.addApp(this.props.app.id, this.props.servers);
    }

    handleDelete() {
      //faltan comprobaciones y ngif para mostrar o no el boton en el html
        this.props.actions.deleteApp(this.props.app.id);
    }
}

// AppsItem.propTypes = {
//   actions: PropTypes.object.isRequired,
//   servers: PropTypes.array.isRequired,
// };
