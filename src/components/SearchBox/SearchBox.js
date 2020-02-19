import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SearchInput } from '../SearchInput';
import { PopupList } from '../PopupList';
import { getCountries, cancelCountriesRequest } from './duck';

import styles from './SearchBox.module.css';

const initialSearch = '';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = { search: initialSearch };
  }

  handleChange = search => {
    const { getCountries } = this.props;
    if(search === initialSearch) {
      this.onClear();
    } else {
      this.setState({ search });
      return getCountries(search);
    }
  };

  onSelect = search => {
    this.setState({ search });
  };

  onClear = () => {
    this.setState({ search: initialSearch });
    return this.props.cancelCountriesRequest()
  };

  render() {
    const { search } = this.state;
    const { loading, loaded, list } = this.props;

    return (
      <div className={styles.container}>
        <SearchInput
          value={search}
          loading={loading}
          onChange={this.handleChange}
          onClear={this.onClear}
        />
        <PopupList
          list={list}
          value={search}
          loaded={loaded}
          onSelect={this.onSelect}
        />
      </div>
    )
  }
}

const mapDispatchToState = state => state;
const mapDispatchToProps = {
  getCountries: getCountries,
  cancelCountriesRequest: cancelCountriesRequest
};

export default connect(mapDispatchToState, mapDispatchToProps)(SearchBox);