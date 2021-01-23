import { BackButton } from '../shared-components/BackButton.js';
import React from 'react';
import { Jumbo } from '../Jumbo.js';
import { NavigationBar } from '../NavigationBar.js';

export function NoMatch() {
    return (
        <React.Fragment>
            <NavigationBar content={[{
                path: '/', linkName: 'Get Unlost'
            }]} />
            <Jumbo>
                <h2>404: Page Not Found</h2>
                <h2>:(</h2>
            </Jumbo>
            <BackButton />
        </React.Fragment>
    );
}