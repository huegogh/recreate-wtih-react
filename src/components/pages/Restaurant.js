import { BackButton } from '../shared-components/BackButton.js';
import { Styles } from '../restaurant-components/Styles.js';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { NavigationBar } from '../restaurant-components/NavigationBar.js';
import { Home } from '../restaurant-components/Home.js';
import { About } from '../restaurant-components/About.js';
import { Menu } from '../restaurant-components/Menu.js';
import { Catering } from '../restaurant-components/Catering.js';
import { Photos } from '../restaurant-components/Photos.js';
import { NoMatch } from '../pages/NoMatch.js';
import { Footer } from '../restaurant-components/Footer.js';


export function Restaurant() {
    let { path } = useRouteMatch();

    const NavLinks = [
        { path: '', linkName: 'Home' },
        { path: '/about', linkName: 'About' },
        { path: '/menu', linkName: 'Menu' },
        { path: '/catering', linkName: 'Catering' },
        { path: '/photos', linkName: 'Photos' }
    ];

    return (
        <Styles>
            <NavigationBar content={NavLinks} />
                <Switch>
                    <Route exact path={path} component={Home} />
                    <Route path={`${path}/about`} component={About} />
                    <Route path={`${path}/menu`} component={Menu} />
                    <Route path={`${path}/catering`} component={Catering} />
                    <Route path={`${path}/photos`} component={Photos} />
                    <Route component={NoMatch} />
                </Switch>
                <Footer />
            <BackButton />
        </Styles>
    );
}