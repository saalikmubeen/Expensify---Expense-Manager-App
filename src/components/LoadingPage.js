import React from 'react';

class LoadingPage extends React.Component {
    render() {
        return (
            <div className="loader">
                <img className="loader__image" src="/loader.gif" alt="Loading"/>
            </div>
        )
    }
}

export default LoadingPage;