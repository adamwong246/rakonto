import React from 'react';
import { IndraV0 } from '../components/IndraV0.js';
import { BackendContext, backend } from '../components/IndraV0/Backend.js';

export default function IndraV0Story() {
    return (
        <BackendContext.Provider value={backend}>
            <div>
                <IndraV0 />
            </div>
        </BackendContext.Provider>
    );
}
