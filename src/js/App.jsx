import React from "react";
import { data } from './constants/data';
import FilterableProductTable from './containers/FilterableProductTable';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FilterableProductTable data={data} />
      </React.Fragment>
    );
  }
}

export default App;
