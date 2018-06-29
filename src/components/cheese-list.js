import React from 'react';
import {connect} from 'react-redux';

import {fetchCheese} from '../actions/cheese.js'

export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheese())
  }
  render() {
    if (this.props.loading) {
      return (
        <li>loading...</li>
      );
    } else if (this.props.error) {
      return (
        <li>{this.props.error}</li>
      );
    } else {
      const cheeseList = this.props.cheeses.map((cheese, index) =><li key={index}>{cheese}</li>);
      return (
        <ul>
          {cheeseList}
        </ul>
      );
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    cheeses: state.cheeses,
    loading: state.loading,
    error: state.error
  }
};

export default connect(mapStateToProps)(CheeseList);
