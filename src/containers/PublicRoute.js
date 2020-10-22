import React from 'react';
import Header from './Header';

import { Switch, Route } from "react-router-dom";

function PublicRoute({ component: Component, ...rest }) {
    return (
        <>
            <Header />
            <Component {...rest} />
        </>
    )
}

export default PublicRoute;