import { BackButton } from '../shared-components/BackButton.js';
import { NavigationBar } from '../business-components/NavigationBar.js';
import { Styles } from '../business-components/Styles.js';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { Home } from '../business-components/Home.js';
import { Classes } from '../business-components/Classes.js';
import { MyAccount } from '../business-components/MyAccount.js';
import { Contact } from '../business-components/Contact.js';
import { NoMatch } from './NoMatch.js';
import { Footer } from '../business-components/Footer.js';
import { Password } from '../business-components/Password.js';


export function Business() {
    let { path } = useRouteMatch();

    const NavLinks = [
        { path: '', linkName: 'Home' },
        { path: '/classes', linkName: 'Classes' },
        { path: '/contact', linkName: 'Contact Us' },
        { path: '/account', linkName: 'My Account' }
    ];

    return (
        <Styles>
            <NavigationBar content={NavLinks} />
                <Switch>
                    <Route exact path={path} component={Home} />
                    <Route path={`${path}/classes`} component={Classes} />
                    <Route path={`${path}/contact`} component={Contact} />
                    <Route path={`${path}/account`} component={MyAccount} />
                    <Route path={`${path}/password`} component={Password} />
                    <Route component={NoMatch} />
                </Switch>
                <Footer />
            <BackButton />
        </Styles>
    );
}