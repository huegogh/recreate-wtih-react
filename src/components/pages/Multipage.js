import { BackButton } from '../shared-components/BackButton.js';
import { Layout } from '../shared-components/Layout.js';
import { NavigationBar } from '../multipage-components/NavigationBar.js';
import React from 'react';
import { Route } from 'react-router-dom';

let { path, url } = useRouteMatch();

export function Multipage() {
    return (
        <React.Fragment>
            <Layout>
                <NavigationBar />
                <BackButton />
            </Layout>
            <Switch>
                <Route exact path={path}>
                    {/* insert homepage component here */}
                </Route>
                <Route>
                    {/* insert other pages here */}
                </Route>
            </Switch>
        </React.Fragment>
    );
}