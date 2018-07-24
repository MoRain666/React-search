import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
class ProductTable extends React.Component {
  render() {
    const inStockOnly = this.props.inStockOnly;
    const text = this.props.filterText;
    let lastCategory = null;
    const list = [];
    this.props.data.forEach(item => {
      if (!item.name.includes(text)) return;
      if (inStockOnly && !item.stocked) return;
      if (item.category !== lastCategory) {
        list.push(
          <ProductCategoryRow key={item.category} name={item.category} />
        );
      }
      list.push(
        <ProductRow
          name={item.name}
          price={item.price}
          stocked={item.stocked}
          key={item.name}
        />
      );
      lastCategory = item.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th style={{ backgroundColor: "red" }}>name</th>
            <th style={{ backgroundColor: "red" }}>price</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    );
  }
}
export default ProductTable;
