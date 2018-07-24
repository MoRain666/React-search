import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.state = {
      filterText: "",
      inStockOnly: false
    };
  }

  textOnChange = text => {
    this.setState({ filterText: text });
  };

  inStockChange = () => {
    this.state.inStockOnly
      ? this.setState({ inStockOnly: false })
      : this.setState({ inStockOnly: true });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          inStockChange={this.inStockChange}
          textOnChange={this.textOnChange}
        />
        <ProductTable
          data={this.data}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </React.Fragment>
    );
  }
}
export default FilterableProductTable;
