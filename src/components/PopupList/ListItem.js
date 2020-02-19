import React, { Component } from 'react';

import styles from './PopupList.module.css';

export class ListItem extends Component {
  handleSelect = () => {
    const { country, onSelect } = this.props;
    onSelect(country.name);
  };

  handleKeyDown = e => {
    if(e.keyCode === 13) {
      this.handleSelect();
    }
  };

  render() {
  const { country, order, higlight } = this.props;
    const { name } = country;
    const parts = name.split(new RegExp(`(${higlight})`, 'gi'));
    const lowerHiglight = higlight.toLowerCase();

    return (
      <div className={styles.item} tabIndex={10 + order} onClick={this.handleSelect} onKeyDown={this.handleKeyDown}>
        {parts.map((part, i) => part.toLowerCase() === lowerHiglight
          ? <b key={i}>{part}</b>
          : <span key={i}>{part}</span>)}
      </div>
    )
  };
}
