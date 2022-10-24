import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './app/App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter basename="/achorded">
        <App />
    </BrowserRouter>
)