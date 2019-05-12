import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>
                Home Component
            </div>
            <button onClick={ () => console.log('Hi') }>Press me</button>
        </div>
    )
};

export default HomePage;