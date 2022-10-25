import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
// { Planets.map((planet) => <PlanetCard name={ planet.name } image={ planet.image } key={ planet.name } />,)}
// <PlanetCard planetName={ Planets[0].name } planetImage={ Planets[0].image } />

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((planet) => (
          <PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            key={ planet.name }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
