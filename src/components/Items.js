import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  state = {
    searchTerm: '',
  };

  updateSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  };

  render() {
    const { title, items, onRemove, onToggle } = this.props;
    const { searchTerm } = this.state;
    const { updateSearchTerm } = this;

    return (
      <section className="Items">
        <h2>
          { title } ({ items.length })
        </h2>
        <Filter searchTerm={ searchTerm } onChange={ updateSearchTerm } />
        {
          items
            .filter((item) =>
              // Hmm… this needs some work.
              item.value.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .map((item) => (
              <Item
                key={ item.id }
                onToggle={ onToggle }
                onRemove={ onRemove }
                item={ item }
              />
            ))
        }
      </section>
    );
  }
}

export default Items;
