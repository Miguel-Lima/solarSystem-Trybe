import React from 'react';
import PropTypes from 'prop-types'; //Usando uma props

class PlanetCard extends React.Component {
  render() {
    const { planetNames, planetImages } = this.props; //Props
    return (
     <div data-testid="planet-card" className='planetCards'>
       <p data-test-id="planet-name" className='planetNames'>{ planetNames }</p>
       <img src= { planetImages } alt= {`Planeta ${planetNames}`}/>
     </div>
    );
  }
}

PlanetCard.propTypes = { // Usando uma props
  planetNames: PropTypes.string.isRequired,
  planetImages: PropTypes.string.isRequired,
}

export default PlanetCard;
