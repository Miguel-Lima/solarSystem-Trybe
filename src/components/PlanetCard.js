import React from 'react';
import PropTypes from 'prop-types'; //Usando uma props

class PlanetCard extends React.Component {
  render() {
    const { planetNames, planetImages } = this.props; //Props
    return (
     <div data-testid="planet-card" className={`planetCards ${planetNames
        .toLowerCase()
        .replace('ú', 'u')
        .replace('ê', 'e')}`}
     >
       <img src= { planetImages } alt= {`Planeta ${planetNames}`}/>
       <p data-test-id="planet-name" className='planetNames'>{ planetNames }</p>
      
     </div>
    );
  }
}

PlanetCard.propTypes = { // Usando uma props
  planetImages: PropTypes.string.isRequired,
  planetNames: PropTypes.string.isRequired,
}

export default PlanetCard;
