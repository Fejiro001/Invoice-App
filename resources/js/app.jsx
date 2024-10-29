import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './Components/ThemeContext';

const appName = 'Invoice App';

createInertiaApp({
    title: (title) =>
        `${title === 'Welcome' ? appName : `${title} - ${appName}`}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <React.StrictMode>
                <ThemeProvider>
                    <App {...props} />
                </ThemeProvider>
            </React.StrictMode>,
        );
    },
    progress: {
        color: '#7C5DFA',
    },
});
