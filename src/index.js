import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ModalProvider} from "./contexts/ModalContext";
import {UsersProvider} from "./contexts/UsersContext";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ModalProvider>
            <UsersProvider>
                <App />
            </UsersProvider>
        </ModalProvider>
    </BrowserRouter>
);
