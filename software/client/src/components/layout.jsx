import React from 'react';
import {Outlet} from 'react-router-dom';
import Toolbar from './toolbar';

export default function Layout({user, onLogout, onLogin, API}){
    return (
        <>
        <Toolbar user={user} onLogout={onLogout} onLogin={onLogin} API={API} />

        <main>
        <Outlet />
        </main>
        </>  
    );
}