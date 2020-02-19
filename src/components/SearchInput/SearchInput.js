import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';

import { Spinner } from '../Spinner';
import { getCountries } from '../SearchBox/duck';
import styles from './SearchInput.module.css';

class SearchInput extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if(prevProps.value && !value) {
      this.inputRef.current.focus();
    }
  }

  handleChange = e => {
    const search = e.target.value;
    this.props.onChange(search)
  };

  render() {
    const { value, loading, onClear } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          {loading && <Spinner className={styles.spinner} />}
          <input
            ref={this.inputRef}
            type="text"
            value={value}
            onChange={this.handleChange}
            className={styles.input}
            tabIndex="1"
          />
        </div>
        {!!value && (
          <button
            onClick={onClear}
            className={styles.button}
            tabIndex="2"
          >
            Clear
          </button>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = {
  getCountries: getCountries,
};

export default connect(null, mapDispatchToProps)(SearchInput);