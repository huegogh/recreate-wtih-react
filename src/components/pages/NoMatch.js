import { BackButton } from '../shared-components/BackButton.js';
import React from 'react';

export function NoMatch() {
    return (
        <React.Fragment>
            <h1>
                404: Page Not Found
            </h1>
            <BackButton />
        </React.Fragment>
    );
}