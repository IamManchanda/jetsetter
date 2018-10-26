import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';

import './NewItem.css';

class NewItem extends Component {
  state = { value: '' };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleSubmit = (event) => {
    const { onSubmit } = this.props;
    const { value } = this.state;
    event.preventDefault();
    onSubmit({
      value,
      id: uniqueId(),
      packed: false,
    });
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form className="NewItem" onSubmit={ handleSubmit }>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={ handleChange }
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
