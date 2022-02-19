import React from 'react';
import PropTypes from 'prop-types'; //Usando uma props

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props; //Props
    return (
     <div data-testid="planet-card">
       <p data-test-id="planet-name">{ planetName }</p>
       <img src= { planetImage } alt= {`Planeta ${planetName}`}/>
     </div>
    );
  }
}

PlanetCard.propTypes = { // Usando uma props
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
}

export default PlanetCard;
