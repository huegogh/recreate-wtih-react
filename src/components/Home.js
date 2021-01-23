import React from 'react';
import { NavigationBar } from './NavigationBar.js';
import { Jumbo } from './Jumbo.js';

const NavLinks = [{
    path: '/review-site', linkName: 'Multipage'
},
{ path: '/hotel', linkName: 'Hotel' },
{ path: '/restaurant', linkName: 'Restaurant' },
{ path: '/business', linkName: 'Business' }];

export function Home(props) {
    return (
        <React.Fragment>
            <NavigationBar content={NavLinks} />
            <Jumbo>
                <h1>React Projects</h1>
                <p>Sites created with React, Bootstrap, and Stylized Components</p>
            </Jumbo>
        </React.Fragment>
    );
}