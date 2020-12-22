import React from 'react'
import PropTypes from 'prop-types'

interface LoaderProps {
    loading: Boolean
}

const LoaderComp: React.FC<LoaderProps> = ({ loading }) => {
    if (loading) return (
        <div id="preloader">
            <div id="loading-center">
                <img src="images/preloader.gif" alt="" />
            </div>
        </div>
    )
}

LoaderComp.propTypes = {
    loading: PropTypes.bool,
}

export default LoaderComp
