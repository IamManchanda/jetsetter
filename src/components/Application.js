import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    items: defaultState,
  };

  addItem = (itemToAdd) => {
    this.setState({
      items: [itemToAdd, ...this.state.items]
    });
  };

  removeItem = (itemToRemove) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== itemToRemove.id),
    });
  };

  toggleItem = (itemToToggle) => {
    const { items } = this.state;
    const updatedItemsAfterToggle = items.map((item) => {
      if (item.id !== itemToToggle.id) return item;
      return { ...itemToToggle, packed: !itemToToggle.packed }
    });
    this.setState({ items: updatedItemsAfterToggle });
  };

  markAllAsUnpacked = () => {
    const { items } = this.state;
    const updatedItemsAfterToggle = items.map((item) => {
      return { ...item, packed: false }
    });
    this.setState({ items: updatedItemsAfterToggle });
  };

  render() {
    const { items } = this.state;
    const unpackedItems = items.filter(item => !item.packed);
    const packedItems = items.filter(item => item.packed);
    const { addItem, removeItem, toggleItem, markAllAsUnpacked } = this;

    return (
      <div className="Application">
        <NewItem onSubmit={ addItem } />
        <CountDown />
        <Items 
          title="Unpacked Items" 
          items={unpackedItems} 
          onRemove={ removeItem }
          onToggle={ toggleItem }
        />
        <Items 
          title="Packed Items" 
          items={packedItems} 
          onRemove={ removeItem }
          onToggle={ toggleItem } 
        />
        <button 
          className="button full-width"
          onClick={ markAllAsUnpacked }>Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
