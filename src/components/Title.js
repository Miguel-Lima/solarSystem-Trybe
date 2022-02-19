import React from 'react';
import PropTypes from 'prop-types'; // Quando recebe uma prop

class Title extends React.Component {
    render() {
        const { headline } = this.props;
        return (
            <h2> { headline }</h2>
        );
    }
}

Title.propTypes = { // Quando recebe uma prop
    headline: PropTypes.string.isRequired,
}

export default Title;