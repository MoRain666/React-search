import React from 'react'
import { connect } from 'react-redux';

class SearchBar extends React.Component {

  handleCheckBobChange = () => {
    this.props.isStockedChange(this.props.isStocked);
  }

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

export default connect(state =>({
  currentInput: state.filterText,
  isStocked: state.isStocked
}), dispatch =>({
  onInputTextChange: (event) =>{
    dispatch({type: "SEARCH_CHANGE",payload: event.target.value});
  },
  isStockedChange: (isStocked) =>{
    dispatch({type: "TOGGLE_SHOW", payload: isStocked});
  }
}))(SearchBar);
