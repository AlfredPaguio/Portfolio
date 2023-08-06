import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

import path from 'path'


export default defineConfig({
    root: path.resolve(__dirname, 'src'),
    plugins: [
        laravel({
            input: [
              //  'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },

    build: {
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules/bootstrap')) {
                        return 'bootstrap';
                    }
                    if (id.includes('node_modules/@fortawesome/fontawesome-free')) {
                        return 'fontawesome';
                    }
                },
            },
        },
    },

});
