import React from "react";
class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.name}</th>
      </tr>
    );
  }
}
export default ProductCategoryRow;
