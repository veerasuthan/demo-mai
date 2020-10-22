import React from 'react';
import Header from './Header';

function PublicRoute({ component: Component, ...rest }) {
    return (
        <>
            <Header />
            <Component {...rest} />
        </>
    )
}

export default PublicRoute;