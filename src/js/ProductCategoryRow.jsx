import React from "react";
class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  render() {
    return (
      <tr>
        <th colSpan="2">{this.name}</th>
      </tr>
    );
  }
}
export default ProductCategoryRow;
