import React from 'react';
import Index from './src/index';

import Provider from './src/context/Provider';

export default function App() {
    return (
        <Provider>
            <Index />
        </Provider>
    );
}
