import React from 'react';

const Home = () => {
    return (
        <div>
            <div>
                Home Component
            </div>
            <button onClick={ () => console.log('Hi') }>Press me</button>
        </div>
    )
};

export default {
    component: Home
};