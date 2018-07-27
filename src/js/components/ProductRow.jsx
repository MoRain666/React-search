import React from "react";
class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.price = props.price;
    this.stocked = props.stocked;
  }

  render() {
    const name = this.stocked ? (
      this.name
    ) : (
      <span style={{ color: "red" }}>{this.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{this.price}</td>
      </tr>
    );
  }
}
export default ProductRow;
