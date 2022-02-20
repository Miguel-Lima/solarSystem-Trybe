import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
    render() {
        return (
            <div data-testid="solar-system">
            <Title headline="Planetas" />
            <div className='planetTypes'>
            {planets.map((planet) => (
                <PlanetCard
                key={planet.name}
                planetNames={planet.name}
                planetImages={planet.image}
                />
            ))}
            </div>
            </div>
        );
    }
}

export default SolarSystem;
