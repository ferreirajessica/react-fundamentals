import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline = 'Planetas' } = this.props;
    return (
      <h2>
        { headline }
      </h2>
    );
  }
}

export default Title;

Title.propTypes = PropTypes.string.isRequired;
