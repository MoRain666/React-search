import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {

  render() {
    return (
      <React.Fragment>
        <SearchBar
        />
        <ProductTable
          data={this.props.data}
        />
      </React.Fragment>
    );
  }
}
export default FilterableProductTable;
