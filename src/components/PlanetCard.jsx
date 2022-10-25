import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { Planets } = this.props;
    const { name: planetName, image: planetImage } = Planets;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { planetName }
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName} ` } />
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  Planets: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
