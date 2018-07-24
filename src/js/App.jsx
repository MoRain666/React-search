import React, { Component } from "react";
import FilterableProductTable from "./FilterableProductTable";
import { data } from "./data";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FilterableProductTable data={data} />
      </React.Fragment>
    );
  }
}

export default App;
