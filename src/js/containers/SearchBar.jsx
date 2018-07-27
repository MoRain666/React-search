import React from "react";
import { connect } from "react-redux";
import { searchChange, toggleSHow } from './../actions/index';

class SearchBar extends React.Component {
  
  handleCheckBobChange = () => {
    this.props.isStockedChange(this.props.isStocked);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.props.onInputTextChange}
          value={this.props.filterText}
          type="text"
          placeholder="Search..."
        />
        <p>
          <input
            onChange={this.handleCheckBobChange}
            checked={this.props.isStocked}
            type="checkbox"
          />Only show products in stock
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentInput: state.filterText,
    isStocked: state.isStocked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputTextChange: event => {
      dispatch(searchChange(event));
    },
    isStockedChange: isStocked => {
      dispatch(toggleSHow(isStocked));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
