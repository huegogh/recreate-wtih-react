import { BackButton } from '../shared-components/BackButton.js';
import { NavigationBar } from '../multipage-components/NavigationBar.js';
import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { Home } from '../multipage-components/Home.js';
import { Anime } from '../multipage-components/Anime.js';
import { VideoGames } from '../multipage-components/VideoGames.js';
import { Contact } from '../multipage-components/Contact.js';
import { NoMatch } from './NoMatch.js';
import { Footer } from '../multipage-components/Footer.js';


export function Multipage() {
    let { path } = useRouteMatch();

    const NavLinks = [
        { path: '', linkName: 'Home' },
        { path: '/anime', linkName: 'Anime List' },
        { path: '/video-games', linkName: 'Video Game List' },
        { path: '/contact', linkName: 'Contact Us' }
    ];

    return (
        <React.Fragment>
            <NavigationBar content={NavLinks} />
                <Switch>
                    <Route exact path={path} component={Home} />
                    <Route path={`${path}/anime`} component={Anime} />
                    <Route path={`${path}/video-games`} component={VideoGames} />
                    <Route path={`${path}/contact`} component={Contact} />
                    <Route component={NoMatch} />
                </Switch>
                <Footer />
            <BackButton />
        </React.Fragment>
    );
}