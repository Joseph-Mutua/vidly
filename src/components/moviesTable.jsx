import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table"

class MoviesTable extends Component {
columns = [
  {path: "title", label: "Title"},
  {path: "genre.name", label: "Genre"},
  {path: "numberInStock", label: "Stock"},
  {path: "dailyRentalRate", label: "Rate"},
  {key: "Like", content: movie =>  (<Like liked={true} />)},
  {key: "delete", content: movie =>               
               (<button
                  onClick={() => this.props.onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>)},
];

  render() {
    const { movies, onSort, sortColumn} = this.props;

    return (
      <Table columns={this.columns} data={movies} sortColumn={sortColumn} onS ort={onSort}/>
    );
  }
}

export default MoviesTable;
