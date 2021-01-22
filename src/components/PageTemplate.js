import React from 'react';
import { NavigationBar } from './NavigationBar.js';
import { Layout } from './Layout.js';
import { Jumbo } from './Jumbo.js';

const NavLinks = [{path:'/',linkName:'Multipage'},
  {path:'/about', linkName:'Hotel'},
  {path:'/contact', linkName:'Restaurant'},
  {path:'/contact', linkName:'Business'}]

export function PageTemplate(props) {
    return (
        <React.Fragment>
            <NavigationBar content={NavLinks} />
            <Jumbo />
            <Layout>
                {props.children}
            </Layout>
        </React.Fragment>
    );
}

