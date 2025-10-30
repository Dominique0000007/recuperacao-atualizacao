import path from 'path';
import {react} from '@vitejs/plugin-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default {
    base: '/Cadastro-front/',
    build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
    input: 'src/index.js',
    },
},
resolve: {
    alias: {
    '~/': `${path.resolve(__dirname, 'src')}/`
    }
},
plugins: [react(), Router],
    server: {
    port: 3000,
    open: true,
},
    preview: {
    port: 3000,
    open: true,
    },
}
