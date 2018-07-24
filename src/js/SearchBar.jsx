import React from "react";

class SearchBar extends React.Component {
  handleTextChange = e => {
    this.props.textOnChange(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleTextChange}
          value={this.props.filterText}
          type="text"
          placeholder="Search..."
        />
        <p>
          <input
            onChange={this.props.inStockChange}
            checked={this.props.inStockOnly}
            type="checkbox"
          />Only show products in stock
        </p>
      </div>
    );
  }
}
export default SearchBar;
