import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';

import { ListItem } from './ListItem';
import styles from './PopupList.module.css';

class PopupList extends Component {
  constructor() {
    super();
    this.popupRef = createRef();
    this.state = { open: false };
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate(prevProps) {
    if(!prevProps.loaded && this.props.loaded) {
      this.setState({ open: true });
    }
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = e => {
    const { open } = this.state;
    if (open && this.popupRef.current && !this.popupRef.current.contains(e.target)) {
      this.setState({ open: false });
    }
  }

  handleKeyDown = e => {
    if(e.keyCode === 27) {
      this.setState({ open: false });
    }
  };

  onSelect = search => {
    const { onSelect } = this.props;
    this.setState({ open: false });
    onSelect(search);
  };

  render() {
    const { open } = this.state;
    const { list, value, loaded }  = this.props;

    if(!open) return null;

    return (
      <div className={styles.container} ref={this.popupRef}>
        {loaded && !list.length && (<div className={styles.noResults}>No results</div>)}
        {list.map((country, i) => <ListItem country={country} key={i} order={i} higlight={value} onSelect={this.onSelect} />)}
      </div>
    )
  }
}

const mapDispatchToState = state => state;

export default connect(mapDispatchToState)(PopupList);